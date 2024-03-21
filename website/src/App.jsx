import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import About from './pages/About';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <header className="App-header">
        <button className='back-button' onClick={() => navigate(-1)}>≡</button>
        <NavBar />
        <button className='user-details' onClick={() => navigate(-1)}>User</button>
      </header>
      <body className='App-body'>
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </>
      </body>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;