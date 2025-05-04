from django.contrib import admin
from .models import User,  Product, Review

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email')
    search_fields = ('username', 'email')

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'price', 'image')
    search_fields = ('name',)

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('product_id', 'user_id', 'rating')  # remove 'created_at' if not in model
    list_filter = ('rating',)  # remove 'created_at' if not a field
