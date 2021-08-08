import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContianer/ItemDetailContainer";
import { NotFound404 } from './components/NotFound404/NotFound404';
import { CartComponentContext } from './context/CartContext/CartContext';
import { UIComponentContext } from './context/UIContext/UIContext';
import { Order as OrderComponent } from './components/Order/Order';
import { AddItem } from './components/AddItem/AddItem';
import { CartWidget } from './components/CartWidget/CartWidget';
import { CartContainer } from './containers/CartContainer/CartContainer';
import './App.css';

function App() {
  return (
    <UIComponentContext>
      <CartComponentContext>
        <BrowserRouter>
          <Header />
          <main id="wrapper">
            <CartWidget/>
            <Switch>
              <Route exact path="/" component={ItemListContainer} />
              <Route path="/category/:id" component={ItemListContainer} />
              <Route path="/item/:id" component={ItemDetailContainer} />
              <Route path="/cart" component={CartContainer} />
              <Route path="/order/:id" component={OrderComponent} />
              <Route path={["/add/:id", "/add"]} component={AddItem}/>
              <Route path="*" component={NotFound404} />
            </Switch>
          </main>
        </BrowserRouter>
      </CartComponentContext>
    </UIComponentContext>
  );
}

export default App;