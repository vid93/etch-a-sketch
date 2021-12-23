import React from "react";
import Square from './Square'

const Board = ({input, checked}) =>{

    const setGrid = (squares) => {
        document.documentElement.style.setProperty('--squares', squares)
    }

    setGrid(input);

    let div = []

    for(let i = 0; i < input * input; i++){
        div.push(i)
    }

    return(
        <div className="box">
            {
                div.map((item, index) => 
                <Square 
                key={index}
                checked={checked}
                />
                )
            }
        </div>
    )
}

export default Board;