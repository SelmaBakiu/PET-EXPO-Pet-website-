
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import ShowAnimals from './pages/ShowAnimals';
import CreateAnimal from './pages/CreateAnimal';
import DeleteAnimal from './pages/DeleteAnimal';
import UpdateAnimal from './pages/UpdateAnimal';

function App() {
  return (
    <div >
       <Router>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/showanimals' element={<ShowAnimals/>} />
        <Route path='/createanimal' element={<CreateAnimal/>} />
        <Route path='/deleteanimal' element={<DeleteAnimal/>} />
        <Route path='/updateAnimal' element={<UpdateAnimal/>} />
        </Routes>
    </Router>

    </div>
  );
}

export default App;
