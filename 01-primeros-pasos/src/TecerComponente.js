import React from 'react'
import PropTypes  from "prop-types"

export const TecerComponente = (props) => {

    console.log(props)

return (
    <div>
        <h1> Comunicacion entre componentes </h1>
        <ul>
                <li>{props.ficha.grupo}</li>
                <li>{props.ficha.estado}</li>
        </ul>
    </div>
)
}

TecerComponente.propTypes = {
nombre : PropTypes.string.isRequired,
apellido: PropTypes.string.isRequired,
ficha: PropTypes.object
}

TecerComponente.deultProps = {
    nombre : "Julio",
    apellido : "Iglesias"
}