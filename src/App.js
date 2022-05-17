import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer1/ItemListContainer1';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        
        <Routes>
          
          <Route path='/' element={<Home></Home>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer></ItemListContainer>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer></ItemDetailContainer>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
