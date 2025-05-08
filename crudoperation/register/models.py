from django.db import models

class Registration(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)  # In production, use hashing!
    description = models.TextField()

    def __str__(self):
        return self.name