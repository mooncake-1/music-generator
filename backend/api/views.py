from django.http import JsonResponse
from rest_framework.decorators import api_view
from .serializers import MusicParametersSerializer
import subprocess
import logging
import os
import signal

logger = logging.getLogger(__name__)

root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))

models = ["conditional1", "conditional5", "conditional10", "conditional46", "continuous_concat"]

music_process = None

@api_view(["POST"])
def generate_music(request):
    global music_process
    serializer = MusicParametersSerializer(data=request.data)
    if serializer.is_valid():
        valence = serializer.validated_data["valence"]
        arousal = serializer.validated_data["arousal"]
        complexity = serializer.validated_data["complexity"]
        model = models[complexity]
        logger.info(f"Received parameters - valence: {valence}, arousal: {arousal}, complexity: {complexity}")
        radio_script = os.path.abspath(os.path.join(root_dir, "midi-emotion", "src", "radio.py"))
        command = ["python", radio_script, "--model_dir", str(model), "--valence", str(valence), "--arousal", str(arousal)]
        print(command)

        try:
            music_process = subprocess.Popen(command)
            return JsonResponse({"message": "Starting music generation."})
        except Exception as e:
            logger.error(f"Error running radio.py: {str(e)}")
            return JsonResponse({"error": "Failed to start music generation."}, status=500)
    else:
        return JsonResponse(serializer.errors, status=400)

@api_view(["POST"])
def stop_generation(request):   
    global music_process
    if music_process:
        try:
            music_process.send_signal(signal.SIGINT)
            music_process.wait()  
            music_process = None
            return JsonResponse({"message": "Music generation stopped."})
        except Exception as e:
            logger.error(f"Error stopping radio.py: {str(e)}")
            return JsonResponse({"error": "Failed to stop music generation."}, status=500)
    else:
        return JsonResponse({"error": "No music generation process found."}, status=400)
