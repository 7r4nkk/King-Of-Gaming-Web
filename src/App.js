import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer1/ItemListContainer1';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Home from './components/Home';
import Cart from './components/Cart'
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
            <Route path='/categoria/:categoriaId' element={<ItemListContainer></ItemListContainer>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer></ItemDetailContainer>}/>
            <Route path='/cart' element={<Cart></Cart>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>  
    </div>
  );
}

export default App;
