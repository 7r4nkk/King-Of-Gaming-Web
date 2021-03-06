import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Home from './components/Home';
import Cart from './components/Cart/Cart';
import Shop from './components/shop/Shop';
import CartContextProvider from "./components/Context/CartContext";
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/categoria/:categoria' element={<ItemListContainer></ItemListContainer>}/>
            <Route path='/details/:id' element={<ItemDetailContainer></ItemDetailContainer>}/>
            <Route path='/cart' element={<Cart></Cart>}/>
            <Route path='/shop' element={<Shop></Shop>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
