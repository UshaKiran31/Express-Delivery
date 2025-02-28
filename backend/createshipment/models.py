from django.db import models
import uuid


class Address(models.Model):
    country_region = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    flat_house_building = models.CharField(max_length=255)
    area_street_sector_village = models.CharField(max_length=255)
    landmarks = models.CharField(max_length=255, blank=True, null=True)
    town_city = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.flat_house_building}, {self.area_street_sector_village}, {self.town_city}"


class SenderDetails(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    address = models.OneToOneField(Address, on_delete=models.CASCADE, related_name="sender_address")

    def __str__(self):
        return self.name


class ReceiverDetails(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    address = models.OneToOneField(Address, on_delete=models.CASCADE, related_name="receiver_address")

    def __str__(self):
        return self.name


class PackageDetails(models.Model):
    weight = models.DecimalField(max_digits=10, decimal_places=2)  # in kilograms
    dimensions = models.CharField(max_length=50)  # e.g., "30x20x15 cm"
    package_type = models.CharField(max_length=100)
    time_slot = models.CharField(
        max_length=50,
        choices=[
            ('Morning', 'Morning (8 AM - 12 PM)'),
            ('Afternoon', 'Afternoon (12 PM - 4 PM)'),
            ('Evening', 'Evening (4 PM - 8 PM)'),
        ]
    )

    def __str__(self):
        return f"{self.weight} kg, {self.dimensions}, {self.package_type}, {self.time_slot}"


class PaymentOptions(models.Model):
    PAYMENT_CHOICES = [
        ('online_payment', 'Online Payment'),
        ('wallet_balance', 'Wallet Balance'),
        ('cod', 'Cash on Delivery'),
    ]

    payment_method = models.CharField(max_length=15, choices=PAYMENT_CHOICES)

    def __str__(self):
        return self.payment_method


class Parcel(models.Model):
    awb_number = models.CharField(max_length=20, unique=True, editable=False)  # Unique identifier for shipment
    status = models.CharField(
        max_length=50,
        choices=[
            ('Booked', 'Booked'),
            ('Picked Up', 'Picked Up'),
            ('In Transit', 'In Transit'),
            ('Out for Delivery', 'Out for Delivery'),
            ('Delivered', 'Delivered'),
        ],
        default='Booked',
    )
    sender = models.OneToOneField(SenderDetails, on_delete=models.CASCADE, related_name="parcel_sender")
    receiver = models.OneToOneField(ReceiverDetails, on_delete=models.CASCADE, related_name="parcel_receiver")
    package = models.OneToOneField(PackageDetails, on_delete=models.CASCADE, related_name="parcel_package")
    payment_option = models.OneToOneField(PaymentOptions, on_delete=models.CASCADE, related_name="parcel_payment")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.awb_number:
            self.awb_number = self.generate_awb_number()
        super().save(*args, **kwargs)

    def generate_awb_number(self):
        return f"AWB{uuid.uuid4().hex[:7].upper()}"  # Generates a 15-character unique ID


    def __str__(self):
        return f"Parcel {self.awb_number} from {self.sender.name} to {self.receiver.name}"
