import './App.css';
import { Header } from './components/Header/Header';
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContianer/ItemDetailContainer";

function App() {
  return (
    <>
      <Header />

      <ItemDetailContainer/>

      <br/>
      <br/>
      <br/>

      <ItemListContainer saludo={"Componente de ejercicio anterior..."} />
    </>
  );
}

export default App;