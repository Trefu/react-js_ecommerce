import './App.css';
import { Header } from './components/Header/Header';
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <ItemListContainer saludo={"Componente de ejercicio anterior..."} />
    </>
  );
}

export default App;