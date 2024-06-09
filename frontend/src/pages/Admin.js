import React, { useState } from 'react';
import '../styles/Admin.css';
import { Link } from 'react-router-dom';

function Admin() {
  const [action, setAction] = useState('');


  return (
    <div className="admin">
      <div className="headerContainer">
        <h1>Admin Page</h1>
        <div className="buttons">
            <Link to="/showanimals"><button>ShowAnimals</button></Link>
            <Link to="/createanimal"><button>CreateAnimal</button></Link>
            <Link to="/updateanimal"><button>UpdateAnimal</button></Link>
            <Link to="/deleteanimal"><button>DeleteAnimal</button></Link>
          </div>
    </div>
    </div>
  );
}

export default Admin;
