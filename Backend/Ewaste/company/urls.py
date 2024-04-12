from django.urls import path
from . import views

urlpatterns = [
    path('signup/c/',views.companysignup_view),
    path('signup/d/',views.dealersignup_view),
    path('signup/users/',views.UserList.as_view(), name='user_list'),
    path('signup/companylogin/', views.login_company, name='login_user'),
    path('signup/dealerlogin/', views.login_dealer, name='login_user'),
    path('signup/forgot/', views.forgot, name='forgor_api'),
    path('company/',views.sellcompany),
    path('company/products/', views.ProductListAPIView.as_view()),
    path('company/get/<int:id>/', views.ProductListAPIView.as_view()),
    path('company/products/<int:product_id>/', views.get_product_by_id),
    path('pay/',views.companyform),
    path('pay/get/', views.CompanyListAPIView.as_view()),
    path('pay/get/<int:id>/', views.CompanyListAPIView.as_view()),
    path ('pay/form/',views.Dealerform),
    path('pay/form/get/',views.DealerListAPIView.as_view()),
    path ('pay/get/<int:id>/',views.DealerListAPIView.as_view()),
    path('bid/',views.Bidform),
    path('bid/get/', views.BidListAPIView.as_view()),
    path('bid/get/<int:id>/', views.BidListAPIView.as_view()),
    path('otpvalidate/', views.validate,name='otpvalidatepapi'),
    path('succesotp/', views.succesotp,name='succesotpapi'),
    path('startbid/', views.startbid.as_view(),name='startbidapi'),
    path('bidedata/', views.bideddata.as_view(),name='bideddataapi'),
]