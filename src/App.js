import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Cart from './components/Cart/Cart';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/"> <ItemListContainer/> </Route>
      <Route exact path="/category/:categoryId" component={ItemListContainer}/>
      <Route exact path="/detail/:id" component={ItemDetailContainer}/>
      <Route exact path="/cart" component={Cart}/>
      </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
