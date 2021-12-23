import React from "react";

const Buttons = ({setInput, setChecked}) => {

    const clear = () => {
        const element = document.querySelectorAll('.square')
        
        for(let i = 0; i < element.length; i++){
            element[i].style.backgroundColor = 'white'
        }
    }

    const reset = () => {
        let board = prompt("Enter dimensions of the board between 16 and 100")
        while(board > 100 || board < 16 || board === null || isNaN(board) || board % 1 !== 0) {
            board = prompt("You must enter a number between 16 and 100")
        }
        setInput(board)
        clear()
    }

    const rainbow = () => {
        setChecked(false)
    }

    const black = () => {
        setChecked(true)
    }

    return(
        <div className="buttons">
            <button onClick={reset}>Reset Board</button>
            <button onClick={clear}>Clear Board</button>
            <button onClick={rainbow}>Random Color</button>
            <button onClick={black}>Black</button>
        </div>
    )
}

export default Buttons;