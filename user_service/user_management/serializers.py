from rest_framework import serializers
from user_management.models import Customer
from .models import Employee

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'user', 'fullname', 'email', 'address', 'province', 'post_code', 'tel']

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'name', 'role', 'image_url'] 