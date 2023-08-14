from rest_framework import serializers
from .models import produit

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = produit
        fields = '__all__'
