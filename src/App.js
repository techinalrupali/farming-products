import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import ProductInfo from './components/ProductInfo';
import Cart from './components/Cart';
import Shop from './components/Shop';
import { CartProvider } from 'react-use-cart';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Contactus from './components/Contactus';
import Login from './components/Login';
import Fruits from './components/Fruits';
 import Vegetables from './components/Vegetables';
import Seeds from './components/Seeds';

function App() {
  return (
    <>
    <CartProvider>
    <Router>
     <MyNavbar />
    
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/shop' element={<Shop/>}/>
       <Route path='/about' element={<Aboutus/>}/>
       <Route path='/contact' element={<Contactus/>}/>
       {/* <Route path='/productcard' element={<ProductCard />}/> */}
       <Route path='/productinfo/:id' element={<ProductInfo/>}/>
       <Route path='/cart' element={<Cart/>}/>
        <Route path='/fruit' element={<Fruits/>}/>
       <Route path='/vegetable' element={<Vegetables/>}/>
       <Route path='/seeds' element={<Seeds/>}/> 
       <Route path='/login' element={<Login/>}/>
     </Routes>
     <Footer/>
    </Router>
    </CartProvider>
    </>
   );
 }
 
 export default App;