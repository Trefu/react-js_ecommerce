import './App.css';
import { Header } from './components/Header/Header';
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ItemListContainer saludo={"TODO: Item list"} />
    </div>
  );
}

export default App;