import React, {useState} from 'react'
import Proptypes from 'prop-types'

export const Ejercicio = ({year}) => {

    const [yearNow, setYearNow] = useState(year);

const Siguiente = e =>{
    setYearNow(yearNow +1)
}

const Anterior = e =>{
    setYearNow(yearNow-1)
}

const cambiarYear = e =>{
    let dato = parseInt(e.target.value);
    

    if(Number.isInteger(dato)){
        setYearNow(dato);
    }else{
        setYearNow(year);
    }
    
}

    return (
    <div>
    <h2> Ejercicio con eventos y useState</h2>
    <strong className='label label-green'> 
    {yearNow}

    </strong>
    <p>
        <button onClick={Anterior}>ANTERIOR</button>
            &nbsp;
        <button onClick={Siguiente}>SIGUIENTE</button>
    </p>

    <p>
        Cambiar año: 
        <input 
        onChange={cambiarYear}
        type="text" 
        placeholder='Cambiar el año'/>
    </p>


    </div>        
)
}

Ejercicio.prototype = {
    year: Proptypes.number.isRequired
}