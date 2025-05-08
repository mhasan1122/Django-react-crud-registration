from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Registration
from .serializers import RegistrationSerializer


def success_response(message="Success", data=None):
    return Response({
        "status": True,
        "message": message,
        "data": data
    }, status=status.HTTP_200_OK)


def error_response(message="Error", data=None, status_code=status.HTTP_400_BAD_REQUEST):
    return Response({
        "status": False,
        "message": message,
        "data": data
    }, status=status_code)


@api_view(['GET'])
def apiOverview(request):
    urls = {
        'Create': '/registration-create/',
        'List': '/registration-list/',
        'Detail View': '/registration-detail/<int:pk>/',
        'Update': '/registration-update/<int:pk>/',
        'Delete': '/registration-delete/<int:pk>/',
    }
    return success_response("API Overview", urls)

@api_view(['POST'])
def registrationCreate(request):
    serializer = RegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return success_response("Registration created successfully", serializer.data)
    return error_response("Validation failed", serializer.errors)


@api_view(['GET'])
def registrationList(request):
    registrations = Registration.objects.all()
    serializer = RegistrationSerializer(registrations, many=True)
    return success_response("Registration list retrieved", serializer.data)


@api_view(['GET'])
def registrationDetail(request, pk):
    registration = get_object_or_404(Registration, id=pk)
    serializer = RegistrationSerializer(registration)
    return success_response("Registration details retrieved", serializer.data)





@api_view(['PUT'])
def registrationUpdate(request, pk):
    registration = get_object_or_404(Registration, id=pk)
    serializer = RegistrationSerializer(instance=registration, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return success_response("Registration updated successfully", serializer.data)
    return error_response("Validation failed", serializer.errors)


@api_view(['DELETE'])
def registrationDelete(request, pk):
    registration = get_object_or_404(Registration, id=pk)
    registration.delete()
    return success_response("Registration deleted successfully")