import React, { useState } from 'react'

export const MiPrimerEstado = () => {
/*let nombre = "Mario Espitia"

const cambiarNombre = e =>{
    nombre = "Pepito Perez";
}*/

const [nombre, setNombre] = useState("Mario Espitia");

const cambiarNombre = (e,nombreFijo) =>{
    setNombre(nombreFijo)
}

return (
    <div>
        <h3>Miprimer estado</h3>
    <strong>{nombre}</strong>

    &nbsp;
    <button onClick={ e => cambiarNombre(e, "Ray America")}>Cambiar</button>
    
    &nbsp;
    <input type="text" onChange={e => cambiarNombre(e, e.target.value)} placeholder='cambia el nombre'/>

    </div>
    
  )
}
