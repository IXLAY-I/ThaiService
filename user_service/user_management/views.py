from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from user_management.models import Useri
from user_management.serializers import UserSerializer
from user_management.serializers import Review_ShopSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .serializers import ProductSerializer
from .models import Product
from rest_framework.generics import RetrieveAPIView
from .models import Review_Shop
@csrf_exempt
def register(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        if 'username' not in data or 'password' not in data or 'email' not in data:
            return JsonResponse({"error": "Missing username, password, or email."}, status=400)
        try:
           user = User.objects.create_user(
                username=data['username'],
                password=data['password'],
                email=data['email']
            )
        except Exception as e:
            return JsonResponse({"message": "username already used."}, status=400)
    
        useri = Useri(username=user, email=data['email'])
        useri.save()
        
        serializer = UserSerializer(useri)
        return JsonResponse(serializer.data, status=201)
    return JsonResponse({"error":"method not allowed."}, status=405)

class UserView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        User_data = Useri.objects.get(id=request.user.id)
        user_serializer = UserSerializer(User_data)
        content = {
        'data': user_serializer.data
        }
        return Response(content)
    
class ProductListView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ReviewListView(APIView):
    def get(self, request):
        reviews = Review_Shop.objects.all()
        review_serializer = Review_ShopSerializer(reviews, many=True)
        return Response(review_serializer.data)