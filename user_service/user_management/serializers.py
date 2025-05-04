from rest_framework import serializers
from user_management.models import User
from .models import Review_Shop, Product, Review, Product_detail, Payment

# Serializer สำหรับ User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

# Serializer สำหรับ Review_Shop
class Review_ShopSerializer(serializers.ModelSerializer):
    userid = UserSerializer()  # เพิ่ม serializer สำหรับ User เพื่อให้ได้ข้อมูลของผู้ใช้
    class Meta:
        model = Review_Shop
        fields = ['id', 'userid', 'comment']

# Serializer สำหรับ Product
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'product_name', 'status', 'point', 'price', 'top', 'image']

# Serializer สำหรับ Review
class ReviewSerializer(serializers.ModelSerializer):
    product_id = ProductSerializer()  # ใช้ ProductSerializer เพื่อแสดงข้อมูลของ product ที่เกี่ยวข้อง
    user_id = UserSerializer()  # ใช้ UserSerializer เพื่อแสดงข้อมูลของ user ที่เกี่ยวข้อง
    
    class Meta:
        model = Review
        fields = ['id', 'product_id', 'user_id', 'rating']

# Serializer สำหรับ Product_detail
class Product_detailSerializer(serializers.ModelSerializer):
    product_id = ProductSerializer()  # ใช้ ProductSerializer เพื่อแสดงข้อมูลของ product ที่เกี่ยวข้อง
    
    class Meta:
        model = Product_detail
        fields = ['id', 'product_id', 'location', 'total_price']

# Serializer สำหรับ Payment
class PaymentSerializer(serializers.ModelSerializer):
    userid = UserSerializer()  # ใช้ UserSerializer เพื่อแสดงข้อมูลของ user ที่เกี่ยวข้อง
    Product_detail_id = Product_detailSerializer()  # ใช้ Product_detailSerializer เพื่อแสดงข้อมูลของ product_detail ที่เกี่ยวข้อง

    class Meta:
        model = Payment
        fields = ['id', 'userid', 'Product_detail_id', 'status', 'payment_method', 'total_price']
