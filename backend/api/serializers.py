from rest_framework import serializers

class MusicParametersSerializer(serializers.Serializer):
    GENRE_CHOICES = (
        (0, 'Rock'),
        (1, 'Pop'),
        (2, 'Jazz'),
        (3, 'Classical'),
        (4, 'Hip-Hop'),
    )

    valence = serializers.IntegerField(min_value=-10, max_value=10)
    arousal = serializers.IntegerField(min_value=-10, max_value=10)
    complexity = serializers.IntegerField(min_value=0, max_value=2)
    genre = serializers.ChoiceField(choices=GENRE_CHOICES)
