from django.contrib import admin
from .models import Address, SenderDetails, ReceiverDetails, PackageDetails, PaymentOptions, Parcel

@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ('flat_house_building', 'town_city', 'state', 'country_region')

@admin.register(SenderDetails)
class SenderDetailsAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email')

@admin.register(ReceiverDetails)
class ReceiverDetailsAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email')

@admin.register(PackageDetails)
class PackageDetailsAdmin(admin.ModelAdmin):
    list_display = ('weight', 'dimensions', 'package_type', 'time_slot')

@admin.register(PaymentOptions)
class PaymentOptionsAdmin(admin.ModelAdmin):
    list_display = ('payment_method',)

@admin.register(Parcel)
class ParcelAdmin(admin.ModelAdmin):
    list_display = ('awb_number', 'status', 'sender', 'receiver', 'created_at', 'updated_at')
    list_filter = ('status', 'created_at', 'updated_at')
