from django.urls import path

from django.shortcuts import (get_object_or_404,render, HttpResponseRedirect)

from . import views
from .forms import ContactForm
from .models import contact

#url patterns for performing CRUD operations 
urlpatterns = [
    
    path('create', views.create_view, name='Create'),
    path('retrieve', views.retrieve_view, name='Retrieve'),
    path('index', views.index, name='index'),
    path('<id>', views.detail_view, name="Detail"),
    path('update/<id>', views.update_view, name='Update'),
    path('delete/<id>', views.delete_view, name='Delete'),
    
   
]