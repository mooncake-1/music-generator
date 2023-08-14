from django.http import JsonResponse
from rest_framework.decorators import api_view
from .serializers import MusicParametersSerializer
import logging

logger = logging.getLogger(__name__)

@api_view(['POST'])
def generate_music(request):
    serializer = MusicParametersSerializer(data=request.data)
    if serializer.is_valid():
        # Process the validated data here
        valence = serializer.validated_data['valence']
        arousal = serializer.validated_data['arousal']
        complexity = serializer.validated_data['complexity']
        genre = serializer.validated_data['genre']

        logger.info(f"Received parameters - valence: {valence}, arousal: {arousal}, complexity: {complexity}, genre: {genre}")
        # TODO: Generate music based on the parameters

        return JsonResponse({"message": "Music generated successfully!"})
    else:
        return JsonResponse(serializer.errors, status=400)
