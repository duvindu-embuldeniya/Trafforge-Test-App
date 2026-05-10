from django.urls import path
from . views import *


urlpatterns = [
    path('', home, name='home'),

    path('register/', register, name = 'register'),
    
    path('back_health/', back_health, name='back_health'),
    path('back_start/', back_start, name='back_start'),
    path('back_ready/', back_ready, name='back_ready'),
    path('back_live/', back_live, name='back_live'),


    path('front_start/', front_start, name='front_start'),
    path('front_ready/', front_ready, name='front_ready'),
    path('front_live/', front_live, name='front_live'),


    #for wso2.........................................
    path('tests/', gettests, name = 'gettests')
]