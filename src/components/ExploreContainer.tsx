import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">

      <strong>Tableau CRUD</strong>
     
      <div className="search-container">
      <input type="text" className="search-input" placeholder="Rechercher..."/>
      <div className="">
      <button className='ajout'>Ajouter un produit</button>
      </div>
      
    
  </div>

  <table>
      <thead>
          <tr>
              <th>  Nom de produit</th>
              <th>Prix unitaire</th>
              <th> Quantité</th>
              <th>Actions</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
              </td>
          </tr>
          <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
              </td>
          </tr>
      
      </tbody>
  </table>
    </div>
  );
};

export default ExploreContainer;
