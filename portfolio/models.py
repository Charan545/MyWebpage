from django.db import models

# Create a Profile model to store the user's information
class Profile(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    profile_picture = models.ImageField(upload_to='profile_pics/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
