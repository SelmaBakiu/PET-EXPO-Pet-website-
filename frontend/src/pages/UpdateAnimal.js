import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Animal.css';

const UpdateAnimal = () => {
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleUpdateAnimal = async () => {
    const data = { type, name, origin, description, image };

    try {
      setLoading(true);
      await axios.put(`http://localhost:5000/api/animals/${id}`, data);
      setLoading(false);
      window.alert('Animal updated successfully!');
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateAnimal();
  };

  return (
    <div className="animal">
    <div className="animalContainer">
      <h1>Update Animal</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Animal ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Animal'}
        </button>
        {error && <div className="error">An error occurred. Please check the console for details.</div>}
      </form>
    </div>
  </div>
  );
};

export default UpdateAnimal;
