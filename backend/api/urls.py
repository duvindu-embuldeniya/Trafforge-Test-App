from django.urls import path
from . views import *


urlpatterns = [
    path('', home, name='home'),
    
    path('health/', health, name = 'health'),
    path('start/', start, name= 'start'),
    path('ready/', ready, name = 'ready'),
    path('live/', live, name = 'live'),

    path('register/', register, name = 'register')
]