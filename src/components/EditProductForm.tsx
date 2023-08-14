import React, { useState } from "react";
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

  const handleFieldChange = (field: string, value: any) => {
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdateProduct(editedProduct);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <h2>Edit Product</h2>
      <input
        type="text"
        value={editedProduct.nom}
        onChange={(e) => handleFieldChange("nom", e.target.value)}
      />
      <input
        type="number"
        value={editedProduct.prix}
        onChange={(e) => handleFieldChange("prix", Number(e.target.value))}
      />
      <input
        type="number"
        value={editedProduct.quantite}
        onChange={(e) => handleFieldChange("quantite", Number(e.target.value))}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditProductForm;
