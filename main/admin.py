from django.contrib import admin

# Register your models here.
from main.models import *


class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'subcategory', 'id', 'price']
    list_filter = ['subcategory']


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'id']


class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'id']


admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(SubCategory, SubCategoryAdmin)
