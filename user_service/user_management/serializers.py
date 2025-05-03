from rest_framework import serializers
from user_management.models import Customer
from .models import Employee
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'user', 'fullname', 'address', 'province', 'post_code', 'tel']
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'
        