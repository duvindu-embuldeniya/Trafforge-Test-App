from django.urls import path
from . views import *


urlpatterns = [
    path('', home, name='home'),
    path('health/', health, name = 'health'),
    path('startup/', startup, name= 'startup'),
    path('ready/', readiness, name = 'ready'),
    path('live/', liveness, name = 'live'),
    path('register/', register, name = 'register')
]