import React from "react";

const Square = ({checked}) => {

    const randomColor = () => {
       
    const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

    let randomColorString = '#';
    for (let x = 0; x < 6; x++){

    let index = Math.floor(Math.random() * 16)
    let value = arrayOfColorFunctions[index]

    randomColorString += value
    }
    return randomColorString;

    }
    
    const color = (e) => {
        if(checked){
            e.target.style.background = 'black'
        }else{
            e.target.style.background = randomColor();
        }
    }

    return(
        <div className="square" onMouseEnter={color}>
            
        </div>
    )
}

export default Square;