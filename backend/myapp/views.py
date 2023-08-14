from rest_framework import generics
from .models import UserSettings
from .serializers import UserSettingsSerializer

class UserSettingsAPIView(generics.RetrieveUpdateAPIView):
    queryset = UserSettings.objects.all()
    serializer_class = UserSettingsSerializer