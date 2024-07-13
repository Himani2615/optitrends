import Shop from './pages/Shop';
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout1 from './pages/Checkout1';
import Checkout2 from './pages/Checkout2';
import Checkout3 from './pages/Checkout3';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/:product_id" element={<ProductDetails/>}/>
          <Route path="/review" element={<Checkout1/>}/>
          <Route path="/shipping" element={<Checkout2/>}/>
          <Route path="/payment" element={<Checkout3/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
