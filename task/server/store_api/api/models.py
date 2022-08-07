from django.db import models

# Create your models here.

#our drug store database model
class Drug(models.Model):
    name = models.CharField(max_length=500, blank=False, default='')
    description = models.TextField(blank=False, default='')
    sku = models.CharField(max_length=500, blank=False, default='')
    price = models.IntegerField(blank=False, default=0)
    image = models.URLField(blank=False, default='')
    
    def __str__(self):
        return self.name 

