
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="¡Hola bienvenidx!" />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
