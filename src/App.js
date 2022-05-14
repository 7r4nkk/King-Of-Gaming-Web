import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer1/ItemListContainer1';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <ItemListContainer titulo="Procesadores AMD"></ItemListContainer> */}
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;
