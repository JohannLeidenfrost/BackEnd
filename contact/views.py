from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from django.shortcuts import (get_object_or_404, HttpResponseRedirect)
from .models import contact
from .forms import ContactForm
from .serializers import ContactSerializer
from rest_framework import viewsets

class ContactView(viewsets.ModelViewSet):
    #creates the Django REST framework, which is compatible with axios
    #for making post and delete requests
    queryset = contact.objects.all()
    serializer_class = ContactSerializer


def create_view(request):
    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # add the dictionary during initialization
    form = ContactForm(request.POST or None)
    if form.is_valid():
        form.save()
         
    context['form']= form
    return render(request, "create_view.html", context)

def detail_view(request, id): 
    context = {}
    #gets the values of the fields of the contact whose id 
    #matches the desired one
    context["data"] = contact.objects.get(id=id)

    return render(request, "detail_view.html", context)

def retrieve_view(request):
    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # add the dictionary during initialization
    context["dataset"] = contact.objects.all()
         
    return render(request, "retrieve_view.html", context)

def update_view(request, id):
    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # fetch the object related to passed id
    obj = get_object_or_404(contact, id = id)
 
    # pass the object as instance in form
    form = ContactForm(request.POST or None, instance = obj)
 
    # save the data from the form and
    # redirect to detail_view
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/contact/"+id)
 
    # add form dictionary to context
    context["form"] = form
 
    return render(request, "update_view.html", context)

def delete_view(request, id):
    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # fetch the object related to passed id
    obj = get_object_or_404(contact, id = id)
 
 
    if request.method =="POST":
        # delete object
        obj.delete()
        # after deleting redirect to
        # home page
        return HttpResponseRedirect("http://localhost:3000/")
    
 
    return render(request, "delete_view.html", context)

def index(request):
    """returns all data on contacts in the databasein JSON format"""
    latest_contact_list = contact.objects.all()
    output = serializers.serialize('json', latest_contact_list)
    return HttpResponse(output, content_type='application/json')


