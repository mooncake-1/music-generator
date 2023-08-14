from django.db import models

class UserSettings(models.Model):
    valence = models.IntegerField(default=0)
    arousal = models.IntegerField(default=0)
    complexity = models.IntegerField(choices=[(0, 'Low'), (1, 'Medium'), (2, 'High')], default=0)
    genre = models.CharField(max_length=50, choices=[
        ('Rock', 'Rock'),
        ('Pop', 'Pop'),
        ('Jazz', 'Jazz'),
        ('Classical', 'Classical'),
        ('Hip-Hop', 'Hip-Hop'),
    ], default='Rock')
    is_playing = models.BooleanField(default=False)
