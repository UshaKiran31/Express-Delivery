# serializers.py
from rest_framework import serializers
from .models import Address, SenderDetails, ReceiverDetails, PackageDetails, PaymentOptions, Parcel

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

class SenderDetailsSerializer(serializers.ModelSerializer):
    address = AddressSerializer()  # Nested serializer for Address

    class Meta:
        model = SenderDetails
        fields = '__all__'

    def create(self, validated_data):
        # Extract the nested address data
        address_data = validated_data.pop('address')
        # Create the Address object
        address = Address.objects.create(**address_data)
        # Create the SenderDetails object with the Address
        sender = SenderDetails.objects.create(address=address, **validated_data)
        return sender

    def update(self, instance, validated_data):
        # Extract the nested address data
        address_data = validated_data.pop('address', None)
        if address_data:
            # Update the nested Address object
            address_serializer = self.fields['address']
            address_serializer.update(instance.address, address_data)
        # Update the SenderDetails object
        return super().update(instance, validated_data)

class ReceiverDetailsSerializer(serializers.ModelSerializer):
    address = AddressSerializer()  # Nested serializer for Address

    class Meta:
        model = ReceiverDetails
        fields = '__all__'

    def create(self, validated_data):
        # Extract the nested address data
        address_data = validated_data.pop('address')
        # Create the Address object
        address = Address.objects.create(**address_data)
        # Create the ReceiverDetails object with the Address
        receiver = ReceiverDetails.objects.create(address=address, **validated_data)
        return receiver

    def update(self, instance, validated_data):
        # Extract the nested address data
        address_data = validated_data.pop('address', None)
        if address_data:
            # Update the nested Address object
            address_serializer = self.fields['address']
            address_serializer.update(instance.address, address_data)
        # Update the ReceiverDetails object
        return super().update(instance, validated_data)

class PackageDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageDetails
        fields = '__all__'

class PaymentOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentOptions
        fields = '__all__'

class ParcelSerializer(serializers.ModelSerializer):
    sender = SenderDetailsSerializer()
    receiver = ReceiverDetailsSerializer()
    package = PackageDetailsSerializer()
    payment_option = PaymentOptionsSerializer()

    class Meta:
        model = Parcel
        fields = '__all__'

    def create(self, validated_data):
        # Extract nested data
        sender_data = validated_data.pop('sender')
        receiver_data = validated_data.pop('receiver')
        package_data = validated_data.pop('package')
        payment_option_data = validated_data.pop('payment_option')

        # Create nested objects
        sender = SenderDetailsSerializer().create(sender_data)
        receiver = ReceiverDetailsSerializer().create(receiver_data)
        package = PackageDetails.objects.create(**package_data)
        payment_option = PaymentOptions.objects.create(**payment_option_data)

        # Create Parcel object
        parcel = Parcel.objects.create(
            sender=sender,
            receiver=receiver,
            package=package,
            payment_option=payment_option,
            **validated_data
        )
        return parcel