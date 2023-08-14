import React, { useState } from 'react';
import {
  IonModal,
  IonInput,
  IonButton,
  IonContent,
} from '@ionic/react';

interface produit {
  id: number;
  nom: string;
  prix: number;
  quantite: number;
}

interface EditProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveEdit: (editedProduct: produit) => void;
  product: produit;
}

const EditProductForm: React.FC<EditProductFormProps> = ({
  isOpen,
  onClose,
  onSaveEdit,
  product,
}) => {
  const [editedProduct, setEditedProduct] = useState<produit>({
    id: product.id,
    nom: product.nom,
    prix: product.prix,
    quantite: product.quantite,
  });

  const handleSave = () => {
    console.log("Saving edited product:", editedProduct);
    onSaveEdit(editedProduct);
    onClose();
  };
  

  return (
    <IonModal isOpen={isOpen}>
      <IonContent>
        <h2>Modifier le produit</h2>
        <IonInput
          value={editedProduct.nom}
          onIonChange={(e) =>
            setEditedProduct({ ...editedProduct, nom: e.detail.value! })
          }
        ></IonInput>
        <IonInput
          type="number"
          value={editedProduct.prix}
          onIonChange={(e) =>
            setEditedProduct({ ...editedProduct, prix: +e.detail.value! })
          }
        ></IonInput>
        <IonInput
          type="number"
          value={editedProduct.quantite}
          onIonChange={(e) =>
            setEditedProduct({ ...editedProduct, quantite: +e.value! })
          }
        ></IonInput>
        <IonButton onClick={handleSave}>Enregistrer</IonButton>
        <IonButton onClick={onClose}>Annuler</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default EditProductForm;
