import logo from './logo.svg';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './pages/NavBar';
import PageNotFound from './pages/PageNotFound';

function App() {
  const navigate = useNavigate();

  const navigateToWhere = () => {
    let name = "Sneha";
    if( name == 'Rahul'){
      navigate('/about');
    } else {
      navigate('/contact');
    }
  }
  
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      <button onClick={() => navigateToWhere()}>Click Me</button> <br />
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}

export default App;