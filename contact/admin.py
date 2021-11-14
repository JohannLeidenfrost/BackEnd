from django.contrib import admin

from .models import contact

@admin.register(contact)
class ContactAdmin(admin.ModelAdmin):
    """These are the fields displayed on the Django admin page."""
    list_display = ('id','first_name', 'last_name', 'mobile_number', 'work_number', 'home_number', 'email_address')
    ordering = (['id'])
    search_fields = ('first_name', 'last_name', 'mobile_number', 'work_number', 'home_number', 'email_address')