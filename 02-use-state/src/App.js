import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './Components/MiPrimerEstado';
import{Ejercicio} from './Components/Ejercicio'

function App() {

const fecha = new Date();
const yearActual = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <h1>El estado en React - HOOK USE STATE</h1>


     <MiPrimerEstado />

    <Ejercicio year ={yearActual}/>
      </header>
    </div>
  );
}

export default App;
