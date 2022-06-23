import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e,nombre) =>{
        alert("Has dado click al boton!!" + nombre)
    }

    function HasDadoDobleclick(e){
        alert("Has dado doble click!!")
    }

    const hasentrado = (e,accion) =>{
        alert("Has"+accion+"entrado a la caja con el mouse!!!")
    }

    const estasDentro = e =>{
        alert("Estas dentro del input, mete tu nombre!!");
    }

    const estasfuera = e =>{
        alert("Estas fuera del input, chao");
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

        <div id='caja' 
        onMouseEnter = {e => hasentrado(e,"entrado")}
        onMouseLeave = {e => hasentrado(e,"salido")}>
            {/* Evento OnMouseEnter onMouseLeave*/}
            Pasa por encima
        </div>
            <p>
                <input type = "text"
                 onFocus={estasDentro} 
                 onBlur ={estasfuera}
                placeholder = "Introduce tu nombre......" />
            </p>
        
    </div>
  )
}
