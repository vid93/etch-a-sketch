import React, {useState} from 'react';

//Components
import Board from './components/Board'
import Buttons from './components/Buttons'

const App = () => {

  const[input, setInput] = useState(16)
  const[checked, setChecked] = useState(true)

    return (
      <div className="App">
        <Buttons
        setInput={setInput}
        setChecked={setChecked}
        />
        <Board
        input={input}
        checked={checked}
        />
      </div>
    ) 
  
}

export default App;
