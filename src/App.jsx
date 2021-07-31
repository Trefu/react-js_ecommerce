import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContianer/ItemDetailContainer";
import { NotFound404 } from './components/NotFound404/NotFound404';
import { CartComponentContext } from './context/CartContext/CartContext';
import { Cart as CartComponent } from './components/Cart/Cart';
import { AddItem } from './components/AddItem/AddItem';
import './App.css';

function App() {
  return (
    <CartComponentContext>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="/cart" component={CartComponent} />
          <Route path={["/add/:id", "/add"]} component={AddItem}/>
          <Route path="*" component={NotFound404} />
        </Switch>
        {/* TODO: Footer */}
      </BrowserRouter>
    </CartComponentContext>
  );
}

export default App;