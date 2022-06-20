import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TecerComponente } from './TecerComponente';

function App() {

  const ficha_medica = {
    altura : "1.7 cm",
    grupo : "A+",
    estado :  "Bueno",
    alergias : "Ninguna"
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido Al master React!!
        </p>
    
    {/*Cargar mi primer componente*/}
      <div className='componentes'>
        
      <MiComponente />
      <hr />
        <TecerComponente 
        nombre = "Mario" 
        apellido = "Espitia"
        ficha = {ficha_medica} />
      <hr />
      <SegundoComponente />
      
      </div>
      
      </header>




    </div>
  );
}

export default App;
