from django.shortcuts import render
from rest_framework.views import APIView

# Create your views here.
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import User,Dealer,Product,Company,Bid,RegDealer
from django.core.mail import send_mail
from .serializers import UserSerializer,RegDealerSerializer,DealerSerializer,ProductSerializer,CompanySerializer,BidSerializer,dealerser,companyser
from django.db.models import Max
from django.contrib.sessions.models import Session
from json import dumps
import random


@api_view(['POST'])
def companysignup_view(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@api_view(['POST'])
def dealersignup_view(request):
    serializer = RegDealerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = RegDealerSerializer

@api_view(['POST'])
def login_company(request):
    company_name = request.data.get('company_name', '')
    email = request.data.get('email', '')
    password = request.data.get('password', '')

    try:
        user = User.objects.get(email=email)

        if user.password == password and user.company_name == company_name:
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
    except User.DoesNotExist:
        return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def login_dealer(request):
    Dealer_name = request.data.get('Dealer_name', '')
    email = request.data.get('email', '')
    password = request.data.get('password', '')

    try:
        user = RegDealer.objects.get(email=email)

        if user.password == password and user.Dealer_name == Dealer_name:
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
    except User.DoesNotExist:
        return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
            

@api_view(['POST'])
def sellcompany(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

@api_view(['GET'])
def get_product_by_id(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return Response({"error": f"Product with ID {product_id} does not exist"}, status=status.HTTP_404_NOT_FOUND)

    serializer = ProductSerializer(product)
    return Response(serializer.data)

@api_view(['POST'])
def companyform(request):
    if request.method=='POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

class CompanyListAPIView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

@api_view(['POST'])
def Dealerform(request):
    if request.method == 'POST':
        serializer = DealerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
class DealerListAPIView(generics.ListAPIView):
    queryset = Dealer.objects.all()
    serializer_class = DealerSerializer

def genotp():
    val=random.randint(1000,9999)
    return val

@api_view(['POST'])
def forgot(request):
    if request.method=='POST':
        value=request.data['value']
        Email=request.data['email']
        if value in ['company','Company']:
            out=User.objects.filter(email=Email)
            if len(out)>0:
                otp=genotp()
                request.session['Email']=Email
                request.session['who']=value
                request.session['gen_otp']=otp
                request.session.set_expiry(300)
                request.session.save()
                print(request.session.items())
                subject='OTP'
                from_user='aravindpolusani@gmail.com'
                to_list=[request.data['email']]
                
                msg='''
                    {} this is otp to update your personal details...
                    NOTE:This otp is valide for 5 mins'''.format(otp)
                send_mail(subject=subject,from_email=from_user,recipient_list=to_list,message=msg)

                return Response(status=status.HTTP_200_OK)
        elif value in ['dealer','Dealer']:
            out=RegDealer.objects.filter(email=Email)
            if len(out)>0:
                otp=genotp()
                request.session['Email']=Email
                request.session['gen_otp']=otp
                request.session['who']=value
                request.session.set_expiry(300)
                request.session.save()
                print(request.session.items())
                subject='OTP'
                from_user='aravindpolusani@gmail.com'
                to_list=[request.data['email']]
                
                msg='''
                    {} this is otp to update your personal details...
                    NOTE:This otp is valide for 5 mins'''.format(otp)
                send_mail(subject=subject,from_email=from_user,recipient_list=to_list,message=msg)
                
                return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def validate(request):
    if request.method=='POST':
        user_otp=request.data['otp']
        recent_session=Session.objects.order_by('-expire_date').first()
        session_otp=recent_session.get_decoded()['gen_otp']
        if str(session_otp)==user_otp:
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT','GET'])
def succesotp(request):
    if request.method=='GET':
        recent_session=Session.objects.order_by('-expire_date').first()
        session_email=recent_session.get_decoded()['Email']
        which_table=recent_session.get_decoded()['who']
        if which_table in ['dealer','Dealer']:
            user_details=RegDealer.objects.get(email=session_email)
            user_data={
                'client':user_details.Dealer_name,
                'password':user_details.password
            }
            return Response(user_data,status=status.HTTP_200_OK)
        
        elif which_table in ['company','Company']:
            user_details=User.objects.get(email=session_email)
            user_data={
                'client':user_details.company_name,
                'password':user_details.password
            }
            return Response(user_data,status=status.HTTP_200_OK)
        
    elif request.method=='PUT':
        recent_session=Session.objects.order_by('-expire_date').first()
        session_email=recent_session.get_decoded()['Email']
        which_table=recent_session.get_decoded()['who']
        if which_table in ['dealer','Dealer']:
            useval=RegDealer.objects.get(email=session_email)
            userseri=dealerser(useval,data=request.data)
            use_valid=userseri.is_valid()
            if use_valid:
                userseri.save()
                return Response(status=status.HTTP_200_OK)
            else:
                print(userseri.errors)
                return Response(status=status.HTTP_400_BAD_REQUEST)
        elif which_table in ['company','Company']:
            useval=User.objects.get(email=session_email)
            userseri=companyser(useval,data=request.data)
            use_valid=userseri.is_valid()
            if use_valid:
                userseri.save()
                return Response(status=status.HTTP_200_OK)
            else:
                print(userseri.errors)
                return Response(status=status.HTTP_400_BAD_REQUEST)

class bideddata(APIView):
    def get(self,request):
        seri=Bid.objects.all()
        biddata=BidSerializer(seri,many=True)
        return Response(biddata.data,status=status.HTTP_200_OK)


class startbid(APIView):
    def post(self,request):
        request.session['bidstarted']=request.data['started']
        request.session.set_expiry(300)
        request.session.save()
        print(request.session.items())
        recent_session=Session.objects.order_by('-expire_date').first()
        bid_started=recent_session.get_decoded()['bidstarted']
        if str(bid_started)=='False':
            max_amount = Bid.objects.aggregate(max_amount=Max('amount'))['max_amount']
            max_details=Bid.objects.filter(amount=max_amount)
            serilizer=BidSerializer(max_details,many=True).data
            Bid.objects.all().delete()
            Company.objects.all().delete()
            return Response(serilizer,status=status.HTTP_200_OK)
        return Response(status=status.HTTP_100_CONTINUE)

@api_view(['POST'])
def Bidform(request):
    if request.method == 'POST':
        recent_session=Session.objects.order_by('-expire_date').first()
        bid_started=recent_session.get_decoded()['bidstarted']
        if str(bid_started)=='True':
            serializer = BidSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            
        return Response(status=status.HTTP_400_BAD_REQUEST)
        
    
class BidListAPIView(generics.ListAPIView):
    queryset = Bid.objects.all()
    serializer_class = BidSerializer

