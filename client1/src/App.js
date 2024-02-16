
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import LoginSingnup from './Pages/LoginSingnup';
import Registre from './Pages/Registre';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    
    <div className='body' >
      <Navbar />
      
      <div className="container">
        <Routes>

          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<Shopcategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<Shopcategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<Shopcategory banner={kid_banner} category="kid" />}
          />

          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<><LoginSingnup/></>} />
          <Route path="/register" element={<><Registre/></>} />

        </Routes>
        
        </div>
       
      <Footer></Footer>
    </div>
  );
}

export default App;
