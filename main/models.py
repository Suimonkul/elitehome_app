from django.db import models


# Create your models here.
def image_upload_to(instance, filename):
    return "product_images/%s" % filename


class Category(models.Model):
    active = models.BooleanField(verbose_name="Отобразить", default=False)

    title = models.CharField(verbose_name="Название Категории", max_length=50, null=True)

    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания', null=True)
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата изменения', null=True)

    def __str__(self):
        return self.title


class SubCategory(models.Model):
    active = models.BooleanField(verbose_name="Отобразить", default=False)

    title = models.CharField(verbose_name="Название Категории", max_length=50, null=True)
    category = models.ForeignKey(Category, verbose_name="Категория", on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания', null=True)
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата изменения', null=True)

    def __str__(self):
        return self.title


class Product(models.Model):
    active = models.BooleanField(verbose_name="Отобразить", default=False)

    title = models.CharField(verbose_name="Назание", max_length=50, null=True)
    description = models.CharField(verbose_name="Описание", max_length=320, null=True, blank=True)
    size = models.CharField(verbose_name="Габариты", max_length=120, null=True, blank=True)
    price = models.IntegerField(verbose_name="Цена", null=True)

    images = models.ImageField(upload_to=image_upload_to, verbose_name="Изображение")

    subcategory = models.ForeignKey(SubCategory, verbose_name="Суб-Категория", on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания', null=True)
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата изменения', null=True)

    def __unicode__(self):
        return self.title
