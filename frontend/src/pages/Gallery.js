import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import axios from 'axios';

function Gallery() {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const getAnimals = async () => {
    console.log("getAnimals");
    const response = await axios('http://localhost:5000/api/animals');
    console.log("data", response.data);
    setAnimals(response.data);
  };

  useEffect(() => {
    getAnimals();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCardClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleClosePopup = () => {
    setSelectedAnimal(null);
  };

  const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="cardContainer">
        {filteredAnimals.map(animal => (
          <div className="card" key={animal.id} onClick={() => handleCardClick(animal)}>
            <img src={animal.image} alt={animal.name} />
            <h2>{animal.name}</h2>
            <p>{animal.origin}</p>
          </div>
        ))}
      </div>
      {selectedAnimal && (
        <div className="popup">
          <div className="popupContent">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <h2>{selectedAnimal.name}</h2>
            <img src={selectedAnimal.image} alt={selectedAnimal.name} />
            <p>Origine: {selectedAnimal.origin}</p>
            <p>Type: {selectedAnimal.type}</p>
            <p>Description: {selectedAnimal.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
