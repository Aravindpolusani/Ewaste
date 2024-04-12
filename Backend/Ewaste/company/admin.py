from django.contrib import admin
from .models import Company,Product
from .models import Dealer,RegDealer
from .models import Bid,User

# Register your models here.
admin.site.register(Company)
admin.site.register(Product)
admin.site.register(Dealer)
admin.site.register(Bid)
admin.site.register(User)
admin.site.register(RegDealer)