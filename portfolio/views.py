from django.shortcuts import render
from .models import Profile  # Import your Profile model

def home(request):
    # Query the database for the first Profile object
    profile = Profile.objects.first()  # Get the first profile or any profile you need
    return render(request, 'portfolio/home.html', {'profile': profile})

def about(request):
    return render(request, 'portfolio/about.html')

def contact(request):
    return render(request, 'portfolio/contact.html')
