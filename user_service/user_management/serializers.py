from rest_framework import serializers
from user_management.models import Useri
from .models import Review_Shop, Product, Review, Product_detail, Payment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Useri
        fields = ['id', 'username', 'email']

class Review_ShopSerializer(serializers.ModelSerializer):
    userid = UserSerializer() 
    class Meta:
        model = Review_Shop
        fields = ['id', 'userid', 'comment']

class Product_detailMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_detail
        fields = ['location', 'total_price', 'habit', 'ability', 'like']


class ProductSerializer(serializers.ModelSerializer):
    latest_rating = serializers.SerializerMethodField()
    product_details = Product_detailMiniSerializer(many=True, read_only=True) 
    
    class Meta:
        model = Product
        fields = ['id', 'product_name', 'status', 'point', 'price', 'top', 'image', 'latest_rating', 'product_details']
    def get_latest_rating(self, obj):
        latest_review = obj.product_reviews.order_by('-id').first()
        return latest_review.rating if latest_review else None
    
class ReviewSerializer(serializers.ModelSerializer):
    product_id = ProductSerializer()  
    user_id = UserSerializer() 
    
    class Meta:
        model = Review
        fields = ['id', 'product_id', 'user_id', 'rating']

class Product_detailSerializer(serializers.ModelSerializer):
    product_id = ProductSerializer()  
    
    class Meta:
        model = Product_detail
        fields = ['id', 'product_id', 'location', 'total_price', 'habit', 'ability', 'like']

class PaymentSerializer(serializers.ModelSerializer):
    userid = UserSerializer()
    Product_detail_id = Product_detailSerializer()

    class Meta:
        model = Payment
        fields = ['id', 'userid', 'Product_detail_id', 'status', 'payment_method', 'total_price']

