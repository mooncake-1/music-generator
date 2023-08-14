# views.py inside the 'api' app directory
from django.http import JsonResponse
from django.urls import path
from . import views

def test_view(request):
    return JsonResponse({"message": "API is working!"})

urlpatterns = [
    path('generate/', views.generate_music, name='generate_music'),
]
