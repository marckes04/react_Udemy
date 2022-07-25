import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("")

  //Generico/Basico
  const GetUsuariosEstaticos = () => {
    setUsuarios([
      {
        "id": 1,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
      },
      {
        "id": 2,
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://reqres.in/img/faces/5-image.jpg"
      },
      {
        "id": 3,
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
      }
    ]);
  }

  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users")
      .then(respuesta => respuesta.json())
      .then(resultado_final => {
        setUsuarios(resultado_final.data);
        console.log(usuarios)
      },
        error => {
          console.log(error);
        }
      );
  }

  const getUsuariosAjaxAW =  () => {

    setTimeout(async() =>{
      try{
        const peticion = await fetch("https://reqres.in/api/users");
        const { data } = await peticion.json();
    
        setUsuarios(data);
        setCargando(false);
      } catch(error){
        console.log("hola",error.message);
        setErrores(error.message);
      }

    },3000)

  }



  useEffect(() => {
    //GetUsuariosEstaticos();
    // getUsuariosAjaxPms();

    getUsuariosAjaxAW();
  }, []);

  if(errores !== ""){

    return (
      <div className='errores'>
        {errores}
      </div>
    );

  } else if (cargando == true) {
    // Cuando esta todo cargando
    return (
      <div className='cargando'>
        Cargando datos...
      </div>
    );
  } else if(cargando == false && errores ===""){
      //Cuando todo ha ido bien
  return (
    <div>
      <h2>Listado de usuarios via AJAX</h2>
      <ol className='usuarios'>
        {
          usuarios.map(usuario => {
            return(<li key={usuario.id}>
              <img src={usuario.avatar} width = "80" />
              &nbsp;
              {usuario.first_name} {usuario.last_name}
              </li>)
          })
        }
      </ol>

    </div>


  )}
}
