import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Animal.css';

const ShowAnimals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = async () => {
    try {
      const response = await axios('http://localhost:5000/api/animals');
      setAnimals(response.data);
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Origin</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {animals.map(animal => (
            <tr key={animal._id}>
              <td>{animal._id}</td>
              <td>{animal.name}</td>
              <td>{animal.type}</td>
              <td>{animal.origin}</td>
              <td>{animal.description}</td>
              <td>
                <img src={animal.imageUrl} alt={animal.name} style={{ width: '100px', height: 'auto' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAnimals;
