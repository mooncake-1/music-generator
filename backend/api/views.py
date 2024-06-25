from django.http import JsonResponse
from rest_framework.decorators import api_view
from .serializers import MusicParametersSerializer
import subprocess
import logging
import os

logger = logging.getLogger(__name__)

@api_view(['POST'])
def generate_music(request):
    serializer = MusicParametersSerializer(data=request.data)
    if serializer.is_valid():
        valence = serializer.validated_data['valence']
        arousal = serializer.validated_data['arousal']
        logger.info(f"Received parameters - valence: {valence}, arousal: {arousal}")

        radio_script = '../../midi-emotion/src/radio.py'
        command = ['python', radio_script, '--model_dir', 'conditional1', '--valence', str(valence), '--arousal', str(arousal)]

        try:
            subprocess.Popen(command)
            return JsonResponse({"message": "Starting music generation."})
        except Exception as e:
            logger.error(f"Error running radio.py: {str(e)}")
            return JsonResponse({"error": "Failed to start music generation."}, status=500)

    else:
        return JsonResponse(serializer.errors, status=400)
