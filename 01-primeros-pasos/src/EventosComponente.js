import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e,nombre) =>{
        alert("Has dado click al boton!!" + nombre)
    }

    function HasDadoDobleclick(e){
        alert("Has dado doble click!!")
    }

    return (
    <div>
        <h1>Eventos en React</h1>
        <p>
        {/*Evento Click*/}
        <button onClick={ e => hasDadoClick(e, "Mario")}>Dame Click!!</button>
        </p>

        <p>
        {/*Evento doble Click*/}
        <button onDoubleClick={HasDadoDobleclick}>Dame Doble Click!!</button>
        </p>
    </div>
  )
}
