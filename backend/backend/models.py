from django.db import models

class produit(models.Model):
    nom = models.CharField(max_length=255)
    prix = models.PositiveIntegerField()
    quantite = models.PositiveIntegerField()
    

    class meta:
        db_table="produit"
