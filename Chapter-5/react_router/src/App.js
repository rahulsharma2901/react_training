import { Routes, Route, useNavigate,  } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './pages/NavBar';
import PageNotFound from './pages/PageNotFound';
import Products from './pages/Products';
import Shirts from './pages/Shirts';
import Accessories from './pages/Accessories';
import Shoes from './pages/Shoes';
import Jeans from './pages/Jeans';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import './App.css';

function App() {
  const navigate = useNavigate();
  const navigateToWhere = () => {
    let name = "Sneha";
    if (name === "Rahul"){
      navigate('/about')
    }
    else {
      navigate('/contact')
    }
  }
    return (
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} >
            <Route index element= {<Shirts />} />
            <Route path='shirts' element={<Shirts />} />
            <Route path='jeans' element={<Jeans />} />
            <Route path='shoes' element={<Shoes />} />
            <Route path='accessories' element={<Accessories />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<UserDetails />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <button onClick={() => navigateToWhere()}>Click Me</button> <br />
        <button onClick={() => navigate(-1)}>Go back</button>
      </>
    );
  }

export default App;
