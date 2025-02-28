# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    AddressViewSet, SenderDetailsViewSet, ReceiverDetailsViewSet,
    PackageDetailsViewSet, PaymentOptionsViewSet, ParcelViewSet
)

router = DefaultRouter()
router.register(r'addresses', AddressViewSet)
router.register(r'senders', SenderDetailsViewSet)
router.register(r'receivers', ReceiverDetailsViewSet)
router.register(r'packages', PackageDetailsViewSet)
router.register(r'payment-options', PaymentOptionsViewSet)
router.register(r'parcels', ParcelViewSet)

urlpatterns = [
    path('', include(router.urls)),
]