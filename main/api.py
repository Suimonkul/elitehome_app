from tastypie import fields
from tastypie.resources import ModelResource

from main.models import *


class CategoryResource(ModelResource):
    class Meta:
        queryset = Category.objects.all()
        resource_name = 'category'
        allowed_method = ['get']


class SubCategoryResource(ModelResource):
    category = fields.ForeignKey(CategoryResource, 'category')

    class Meta:
        queryset = SubCategory.objects.all()
        resource_name = 'subcategory'
        allowed_method = ['get']


class ProductResource(ModelResource):
    subcategory = fields.ForeignKey(SubCategoryResource, 'subcategory')

    class Meta:
        queryset = Product.objects.all()
        resource_name = 'product'
        allowed_method = ['get']
