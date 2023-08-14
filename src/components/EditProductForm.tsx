import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
} from "@ionic/react";
import "./EditProductForm.css"; 

export interface Produit {
  id: number;
  nom: string;
  prix: number;
  quantite: number;
}

interface EditProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  product: Produit; // The product to be edited
  onUpdateProduct: (updatedProduct: Produit) => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({
  isOpen,
  onClose,
  product,
  onUpdateProduct,
}) => {
  const [editedProduct, setEditedProduct] = useState<Produit>(product);

  const handleFieldChange = (field: keyof Produit, value: any) => {
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdateProduct(editedProduct);
    onClose();
  };

  return (
    <IonModal isOpen={isOpen}>
    <div className="container">
    <h2>Modifier le produit</h2>
    <IonLabel >Nom</IonLabel>
    <input
      type="text"
      value={editedProduct.nom}
      onChange={(e) => handleFieldChange("nom", e.target.value)}
    />
    <IonLabel >Prix</IonLabel>
    <input
      type="number"
      value={editedProduct.prix}
      onChange={(e) => handleFieldChange("prix", Number(e.target.value))}
    />
    <IonLabel >Quantité</IonLabel>
    <input
      type="number"
      value={editedProduct.quantite}
      onChange={(e) => handleFieldChange("quantite", Number(e.target.value))}
    />
    <IonButton expand="full" onClick={handleUpdate}>
  Modifier
</IonButton>
<IonButton expand="full" onClick={onClose}>
  Annuler
</IonButton>
  </div>
    </IonModal>
  );
};

export default EditProductForm;
