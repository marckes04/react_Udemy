//Importar Modulos de React / dependencias
import React from "react";

// Funcion del componente
const MiComponente = () => {

    let nombre = " Mario"
    let web = " MarioWeb.co"
    let usuario  = {
        facultad: " Ingenieria Electronica",
        sexo: " Masculino",
        codigo: " 2136144"
    }

    console.log(usuario);

    return( 
 
<div className = "MiComponente">
        <hr/>
    <h2> Componente Creado </h2>
    <h3>Datos del usuario</h3>
    <ul>
        <li>Nombre: <strong>{nombre}</strong></li>
        
        <li>WEB:{web}</li>

        <li>Sexo : {usuario.sexo}</li>
        <li>facultad : {usuario.facultad}</li>
        <li>codigo : {usuario.codigo} </li>
    </ul>

    <p>Este es mi primer componente</p>   
        <ul>
    
        <li>React</li>
        <li>Angular</li>
        <li>VUE</li>

        </ul>      
</div>
    
    );
};

// Export 
export default MiComponente;



