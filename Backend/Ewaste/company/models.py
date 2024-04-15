from django.db import models

# Create your models here.

class User(models.Model):
    company_name = models.CharField(max_length=50,null=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=18)

    def __str__(self):
        return self.company_name or "Unnamed Company"

class RegDealer(models.Model):
    Dealer_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=18)

    def __str__(self):
        return self.Dealer_name or "Unnamed Dealer"
    
class Product(models.Model):
    Product_name = models.CharField(max_length=255)
    Product_Image = models.ImageField(upload_to='images/')
    Price = models.IntegerField(null=True)
    Proct_used_in_years = models.IntegerField(null=True)
    Summary = models.CharField(max_length=500,null=True)
    Company_Email = models.EmailField(max_length=30,null=False,blank=True) 
    Quantity = models.IntegerField(default=0)  
    Company = models.CharField(max_length=50, null=True)

    def __str__(self):
        return self. Product_name
    
class Company(models.Model):
    company_name = models.CharField(max_length=100)
    company_email = models.EmailField()
    product_name = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return self.company_name

class Dealer(models.Model):
    name = models.CharField(max_length = 100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)

    def __str__(self):
        return self.name

class Bid(models.Model):
    user_name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.user_name

class Highestbid(models.Model):
    user_name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    product_name = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.user_name} - {self.amount} - {self.product_name} - {self.quantity}"
