from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import produit


class ProduitListView(ListView):
    model = produit
    template_name = 'produit_list.html'  # Le nom du template à utiliser


class ProduitDetailView(DetailView):
    model = produit
    template_name = 'produit_detail.html'


class ProduitDetailView(DetailView):
    model = produit
    template_name = 'produit_detail.html'


class ProduitCreateView(CreateView):
    model = produit
    template_name = 'produit_form.html'
    fields = ['nom', 'prix', 'quantite']  # Liste des champs du formulaire


class ProduitUpdateView(UpdateView):
    model = produit
    template_name = 'produit_form.html'
    fields = ['nom', 'prix', 'quantite']


class ArticleDeleteView(DeleteView):
    model = produit
    template_name = 'produit_confirm_delete.html'
    success_url = '/produits/'  # URL de redirection après la suppression
