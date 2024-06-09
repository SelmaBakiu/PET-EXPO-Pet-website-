import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Animal.css';

const DeleteAnimal = () => {
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleDeleteAnimal = async () => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5000/api/animals/${id}`);
      setLoading(false);
      window.alert('Animal deleted successfully!');
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDeleteAnimal();
  };

  return (
    <div className="animal">
    <div className="animalContainer">
      <h1>Delete Animal</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Animal ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Deleting...' : 'Delete Animal'}
        </button>
        {error && <div className="error">An error occurred. Please check the console for details.</div>}
      </form>
    </div>
    </div>
  );
};

export default DeleteAnimal;
