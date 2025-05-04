from django.db import models
from django.conf import settings

class Customer(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    fullname = models.CharField(max_length=255, blank=True)
    email = models.EmailField(blank=True)
    address = models.CharField(max_length=500, blank=True)
    province = models.CharField(max_length=100, blank=True)
    post_code = models.CharField(max_length=5, blank=True)
    tel = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.fullname or self.user.username


class Employee(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100, default='staff')  # Role defaults to 'staff'
    image_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='product_images/', blank=True, null=True)

    def __str__(self):
        return self.name


class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews', null=True, blank=True)  # Allow null or blank
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True, blank=True)  # Allow null or blank
    rating = models.PositiveIntegerField(default=1)  # Added default for existing data
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Review for {self.product.name} by {self.customer.fullname if self.customer else "Anonymous"}'
