import './ExploreContainer.css';
import React, { useEffect, useState } from "react";
import { getProducts } from "../api/produit";
import { addProduct } from "../api/produit";
import { deleteProduct } from "../api/produit";
import { updateProduct } from "../api/produit";
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
interface ContainerProps {
  name: string;
}

const ProductList: React.FC<ContainerProps> = () => {
  interface produit {
    id: number;
    nom: string;
    prix: number;
    quantite: number;
  }
  const [products, setProducts] = useState<produit[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<produit[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<produit | null>(null);
const [showEditForm, setShowEditForm] = useState(false);


const handleEditProduct = (product: produit) => {
  setSelectedProduct(product);
  setShowEditForm(true);
};



 
  useEffect(() => {
    fetchProducts();
    
  }, []);

  const fetchProducts = async () => {
    try {
      console.log("Fetching products...");
      const productsData: produit[] = await getProducts();
      console.log("Données produits reçues:", productsData);
      if (productsData && productsData.length) {
        setProducts(productsData);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des produits:", error);
    }
  };
  
  const handleSearch = (event: { target: { value: string } }) => {
    const searchQuery = event.target.value.toLowerCase();
    console.log("Search query:", searchQuery);
    const filtered = products.filter((produit) =>
      produit.nom.toLowerCase().includes(searchQuery)
    );
    console.log("Filtered products:", filtered);
    setFilteredProducts(filtered);
  };
  const handleAddProduct = async (newProduct: any) => {
    try {
      // Appel à votre fonction d'ajout de produit ici
      const addedProduct = await addProduct(newProduct);
  
      if (addedProduct) {
        // Mettez à jour l'état des produits avec le nouveau produit ajouté
        setProducts([...products, addedProduct]);
        setRefresh(true);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit:", error);
    }
  };
   // Effet de rafraîchissement automatique après chaque modification
   useEffect(() => {
    if (refresh) {
      fetchProducts();
      setRefresh(false); // Réinitialiser l'état de rafraîchissement
    }
  }, [refresh]);
  const handleDeleteProduct = async (productId: number) => {
    try {
      // Appelez votre fonction de suppression 
      deleteProduct(productId)
      
      // Mettez à jour l'état des produits en filtrant ceux qui ne correspondent pas à l'ID du produit à supprimer
      const updatedProducts = products.filter((produit) => produit.id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Erreur lors de la suppression du produit:', error);
    }
  };
  const handleSaveEdit = async (editedProduct: produit) => {
    try {
      console.log("Saving edited product:", editedProduct);
  
      // Appel à votre fonction de mise à jour de produit ici
      await updateProduct(editedProduct, editedProduct.id);
      console.log("Product updated in the database");
  
     
  
      // Mettez à jour l'état des produits avec le produit modifié
      const updatedProducts = products.map((produit) =>
        produit.id === editedProduct.id ? editedProduct : produit
      );
      console.log("Updated products:", updatedProducts);
      setProducts(updatedProducts);
   setRefresh(true);
      console.log("Product saved successfully!");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du produit:", error);
    }
  };
  
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tableau CRUD</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonSearchbar placeholder="Rechercher..." onIonChange={handleSearch}></IonSearchbar>
      <IonButton className="ajout" onClick={() => setShowAddForm(true)} >Ajouter</IonButton>
      <IonList>
      {filteredProducts.length > 0
        ? filteredProducts.map((produit) => (
            <IonItem key={produit.id}>
              <IonLabel>
                <h2>{produit.nom}</h2>
                <p>Prix unitaire: {produit.prix}</p>
                <p>Quantité: {produit.quantite}</p>
              </IonLabel>
              <IonButton
                className="edit"
                onClick={() => handleEditProduct(produit)}
              >
                modifier
              </IonButton>
              <IonButton
                className="delete"
                onClick={() => handleDeleteProduct(produit.id)}
              >
                supprimer
              </IonButton>
            </IonItem>
          ))
        : products.map((produit) => (
            <IonItem key={produit.id}>
              <IonLabel>
                <h2>{produit.nom}</h2>
                <p>Prix unitaire: {produit.prix}</p>
                <p>Quantité: {produit.quantite}</p>
              </IonLabel>
              <IonButton
                className="edit"
                onClick={() => handleEditProduct(produit)}
              >
                modifier
              </IonButton>
              <IonButton
                className="delete"
                onClick={() => handleDeleteProduct(produit.id)}
              >
                supprimer
              </IonButton>
            </IonItem>
          ))}
      
    </IonList>
    
    {showAddForm && (
      <AddProductForm
        isOpen={showAddForm}
        onClose={() => setShowAddForm(false)}
        onAddProduct={handleAddProduct}
      />
    )}
      
    {showEditForm && selectedProduct && (
      <EditProductForm
  isOpen={showEditForm}
  onClose={() => setShowEditForm(false)}
  onSaveEdit={handleSaveEdit} 
  product={selectedProduct}
/>

    )}  
           
    </IonContent>
    
  </IonPage>
  );
};

export default ProductList;
