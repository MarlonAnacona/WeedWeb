from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Customer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        customer = Customer.objects.get(email=user.email)
        # Add custom claims            
        token['email'] = customer.email,
        token['phone_number'] = customer.phone_number,      
        # ...

        return token   