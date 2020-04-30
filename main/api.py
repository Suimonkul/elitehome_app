from tastypie import fields
from tastypie.constants import ALL_WITH_RELATIONS, ALL
from tastypie.resources import ModelResource

from main.models import *


class CategoryResource(ModelResource):
    class Meta:
        queryset = Category.objects.all()
        resource_name = 'category'
        allowed_method = ['get']
        filtering = {

            "active": ('exact',),
            "title": ('exact',)
        }


class SubCategoryResource(ModelResource):
    category = fields.ForeignKey(CategoryResource, 'category', full=True)

    class Meta:
        queryset = SubCategory.objects.all()
        resource_name = 'subcategory'
        allowed_method = ['get']
        filtering = {
            "category": ALL_WITH_RELATIONS,
            "active": ('exact',),
            "title": ('exact',)
        }


class ProductResource(ModelResource):
    subcategory = fields.ForeignKey(SubCategoryResource, 'subcategory', full=True)

    class Meta:
        queryset = Product.objects.all()
        resource_name = 'product'
        allowed_method = ['get']
        filtering = {
            "active": ('exact',),
            "subcategory": ALL_WITH_RELATIONS,
        }
