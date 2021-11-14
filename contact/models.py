from django.db import models 
from django.db.models import Model
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.core.validators import EmailValidator

permissible_values = [] #the elements that can be in a phone number
for x in range(0,10):
    permissible_values.append(str(x))
permissible_values.extend(["+", "(", ")", ""])

def validate_phone(value):
    """
    value: a possible phone number (String) to be included in the database.
    """
    #a simple validator for phone numbers
    for element in value:
        if element not in permissible_values:
            raise ValidationError(
            _('%(value)s is not a valid phone number'),
            params={'value': value},
            )

class contact(models.Model):
    #fields included in the model
    id = models.AutoField(primary_key = True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    mobile_number = models.CharField(max_length=18, validators=[validate_phone])
    home_number = models.CharField(max_length=18, validators=[validate_phone])
    work_number = models.CharField(max_length=18, validators=[validate_phone])
    email_address = models.CharField(max_length=200, validators=[EmailValidator])



    # renames the instances of the model
    # with their title name
    def __str__(self):
        return self.first_name, self.last_name