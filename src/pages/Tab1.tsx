import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ProductList from '../components/ProductList';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des produits</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Liste des produits</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProductList name="liste_products" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
