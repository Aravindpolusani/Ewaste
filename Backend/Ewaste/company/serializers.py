from rest_framework import serializers
from .models import User,RegDealer,Company,Dealer
from .models import Product,Bid,Highestbid

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'company_name', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

class RegDealerSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegDealer
        fields = ['id', 'Dealer_name', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

class companyser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['password']

class dealerser(serializers.ModelSerializer):
    class Meta:
        model = RegDealer
        fields = ['password']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'company_name', 'company_email', 'product_name', 'quantity', 'price']

class DealerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dealer
        fields = '__all__'

class BidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = '__all__'

class HighestbidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Highestbid
        fields='__all__'


