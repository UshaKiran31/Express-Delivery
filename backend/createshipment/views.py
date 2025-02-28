
from rest_framework import viewsets
from .models import Address, SenderDetails, ReceiverDetails, PackageDetails, PaymentOptions, Parcel
from .serializers import (
    AddressSerializer, SenderDetailsSerializer, ReceiverDetailsSerializer,
    PackageDetailsSerializer, PaymentOptionsSerializer, ParcelSerializer
)

class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

class SenderDetailsViewSet(viewsets.ModelViewSet):
    queryset = SenderDetails.objects.all()
    serializer_class = SenderDetailsSerializer

class ReceiverDetailsViewSet(viewsets.ModelViewSet):
    queryset = ReceiverDetails.objects.all()
    serializer_class = ReceiverDetailsSerializer

class PackageDetailsViewSet(viewsets.ModelViewSet):
    queryset = PackageDetails.objects.all()
    serializer_class = PackageDetailsSerializer

class PaymentOptionsViewSet(viewsets.ModelViewSet):
    queryset = PaymentOptions.objects.all()
    serializer_class = PaymentOptionsSerializer

class ParcelViewSet(viewsets.ModelViewSet):
    queryset = Parcel.objects.all()
    serializer_class = ParcelSerializer