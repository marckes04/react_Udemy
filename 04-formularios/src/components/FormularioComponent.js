import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});

    const ConseguirDatosFormulario = e =>{
        e.preventDefault();

        let datos = e.target;
        console.log(datos)

        let Usuario = {
            Nombre: datos.Nombre.value,
            Apellido: datos.Apellido.value,
            Genero: datos.Genero.value,
            Biografia: datos.Biografia.value,
            Enviar: datos.Enviar.value
        };

        console.log(Usuario);

        setUsuario(Usuario)
    }


    const cambiarDatos = e =>{
        let name_del_input = e.target.name;
        let usuario_para_modificar = usuario; 

        //usuario_para_modificar[name_del_input] = e.target.value

        setUsuario(estado_previo =>({
            
                ...estado_previo,
                [name_del_input]:e.target.value
        })

        );
    }
return (
    <div>
        <h1>Formulario con React</h1>
    { usuario.Biografia &&
        (
        <div className='info_usuario label label-gray'>
            {usuario.Nombre}{usuario.Apellido} es un {usuario.Genero} y su Biografia es esta: <p>{usuario.Biografia}</p>
        </div>
        )
}

        <form onSubmit={ConseguirDatosFormulario}>
            <input type = "text" 
            placeholder='Nombre'
            name='Nombre' 
            onChange={cambiarDatos}/>
            <input type = "text"
            placeholder='Apellido
            ' name='Apellido'
            onChange={cambiarDatos}/>
            
            <select name='Genero' onChange={cambiarDatos}>
            
            <option value= "Hombre"> Hombre </option>
            <option value= "Mujer"> Mujer  </option>
            </select>

            <textarea placeholder='Biografia' name='Biografia' onChange={cambiarDatos}></textarea>

            <input type="submit" value="Enviar" name= 'Enviar'/>

        </form>

    </div>
)

}
