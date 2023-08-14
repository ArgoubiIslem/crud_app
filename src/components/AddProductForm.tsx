import React, { useState } from 'react';
import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
} from '@ionic/react';

interface AddProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (newProduct: any) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ isOpen, onClose, onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    nom: '',
    prix: 0,
    quantite: 0,
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
  
    // Utilisez parseFloat pour les champs numériques
    const newValue = name === 'prix' || name === 'quantite' ? parseFloat(value) : value;
  
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: newValue,
    }));
  };
  

  const handleAddClick = () => {
    onAddProduct(newProduct);
    onClose();
  };

  return (
    <IonModal isOpen={isOpen}>
      <h2>Ajouter un produit</h2>
      <IonItem>
        <IonLabel position="floating">Nom</IonLabel>
        <IonInput
        type="text"
        required
        placeholder="Nom du produit"
          name="nom"
          value={newProduct.nom}
          onIonChange={handleInputChange}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Prix</IonLabel>
        <IonInput
          type="number"
          required
          placeholder="0"
          name="prix"
          value={newProduct.prix}
          onIonChange={handleInputChange}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Quantité</IonLabel>
        <IonInput
        type="number"
        required
        placeholder="0"
        name="quantite"
        value={newProduct.quantite}
        onIonChange={handleInputChange}
      />
      </IonItem>
      <IonButton onClick={handleAddClick}>Ajouter</IonButton>
      <IonButton onClick={onClose}>Annuler</IonButton>
    </IonModal>
  );
};

export default AddProductForm;
