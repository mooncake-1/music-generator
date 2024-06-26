from rest_framework import serializers

class MusicParametersSerializer(serializers.Serializer):
    valence = serializers.IntegerField(min_value=-10, max_value=10)
    arousal = serializers.IntegerField(min_value=-10, max_value=10)
    complexity = serializers.IntegerField(min_value=0, max_value=4)