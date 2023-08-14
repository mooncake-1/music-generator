from django.urls import path
from .views import UserSettingsAPIView

urlpatterns = [
    path('user-settings/<int:pk>/', UserSettingsAPIView.as_view(), name='user-settings'),
]
