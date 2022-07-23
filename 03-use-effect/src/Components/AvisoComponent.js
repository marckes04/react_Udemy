import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        //Cuando el componente se monta
        alert("El componente AvisoComponent esta montado")

        // Cuando el componente se desmonta
        return () => {
            alert("COMPONENTE DESMONTADO!!!")
        }
    },[])


return (
    <div>
        <hr/>
        <h1>Saludos Mario que tal estas?</h1>
        <button onClick={e => {
            alert("Bienvenido")
        }
        }
        >Mostrar Alerta</button>
    </div>
)
}
