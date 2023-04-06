from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Customer, Person, Company


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
    

class PersonSerializer(serializers.ModelSerializer):    
    
    class Meta:
        model = Person
        fields = ['id',
                  'email',
                  'password', 
                  'phone_number', 
                  'national_id', 
                  'first_name', 
                  'middle_name',
                  'last_name', 
                 ]        
        extra_kwargs = {
            'id': {'read_only': True},
            'password': {'write_only': True},
            'national_id': {'required': True}
             }
        
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        person = Person(**validated_data)
        person.set_password(password)

        if(person.middle_name == ''):
            person.middle_name = None

        person.save()
        
        return person
        

class CompanySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Company
        fields = ['id',
                  'email',
                  'password',
                  'phone_number',
                  'NIT',
                  'name', 
                  ]
        extra_kwargs = {
            'id': {'read_only': True},
            'password': {'write_only': True},
            'NIT': {'riquired': True}
             }
    

    def create(self, validated_data):
        password = validated_data.pop('password')
        company = Company(**validated_data)
        company.set_password(password)
        company.save()
        
        return company

