from django import forms
from .models import contact
 
 
# creating a form
class ContactForm(forms.ModelForm):
 
    # create meta class
    class Meta:
        # specify model to be used
        model = contact

 
        # specify fields to be used
        fields = [
            "id",
            "first_name",
            "last_name",
            "mobile_number",
            "home_number",
            "work_number",
            "email_address"
        ]