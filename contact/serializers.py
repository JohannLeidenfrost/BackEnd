from rest_framework import serializers
from .models import contact

class ContactSerializer(serializers.ModelSerializer):
    #serializer for contacts in the database. Can convert the objects in the database to JSON.
    class Meta:
        model = contact
        fields = '__all__'
