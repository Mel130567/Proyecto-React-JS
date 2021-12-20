import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Cart from './components/Cart/Cart';
import CartProvider from './Context/CartContext';
import './App.css'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
        <Route exact path="/"> <ItemListContainer/> </Route>
        <Route exact path="/category/:categoryId" component={ItemListContainer}/>
        <Route exact path="/detail/:id" component={ItemDetailContainer}/>
        <Route exact path="/cart" component={Cart}/>
        </Switch>
      </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
