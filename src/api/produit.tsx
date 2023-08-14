import axios from 'axios';

interface Produit {
  id: number;
  nom: string;
  prix: number;
  quantite: number;
}

export const getProducts = async (): Promise<Produit[]> => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/produit/');
    return response.data ; 
  } catch (error) {
    console.error("Erreur lors de l'obtention des produits:", error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
};

export const deleteProduct = async (id: number): Promise<any> => {
  try {
    const response = await axios.delete(`http://127.0.0.1:8000/produit/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression du produit:', error);
    return [];
  }
};

export const addProduct = async (produit: Produit): Promise<any> => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:8000/produit/',
      produit
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit:", error);
    return null;
  }
};

export const updateProduct = async (produit: Produit, id: number): Promise<any> => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:8000/produit/${id}/`,
      produit
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du produit:', error);
    return null;
  }
};
