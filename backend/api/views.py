from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.decorators import api_view
from . serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status

from django.http import HttpResponse
from django.db import connections
from django.db.utils import OperationalError


def home(request):
    return HttpResponse("<h1>Home Page</h1>")


def health(request):
    for db_name in connections:
        try:
            connections[db_name].cursor()
        except OperationalError:
            return HttpResponse("status: db down", status=503)

    return HttpResponse("status: ok", status=200)

def start(request):
    return HttpResponse("started", status=200)


def ready(request):
    for db_name in connections:
        try:
            connections[db_name].cursor()
        except OperationalError:
            return HttpResponse("db down", status=503)

    return HttpResponse("ready", status=200)


def live(request):
    for db_name in connections:
        try:
            connections[db_name].cursor()
        except OperationalError:
            return HttpResponse("db down", status=503)

    return HttpResponse("ready", status=200)


@api_view(['POST'])
def register(request):

    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)