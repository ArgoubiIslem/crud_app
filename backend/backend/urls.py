"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views

urlpatterns = [
    path('produits/', views.ProduitListView.as_view(), name='produit-list'),
    path('produits/<int:pk>/', views.ProduitDetailView.as_view(), name='produit-detail'),
    path('produits/create/', views.ProduitCreateView.as_view(), name='produit-create'),
    path('produits/<int:pk>/update/', views.ProduitUpdateView.as_view(), name='produit-update'),
    path('produits/<int:pk>/delete/', views.ProduitDeleteView.as_view(), name='produit-delete'),
]
