
import './App.css';
import React, { useState } from 'react';


function App() {
  let [count, setCount] =useState(0);

  let add=()=>{
    if(count<20){
    setCount(count+1)
    }
  }

  let remove=()=>{
    if(count>0){
    setCount(count-1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
       
        <p>
         Counter App (0-20)
         <br></br>
        <div className='Result'> {count} </div>
        </p>

        <button onClick={add}>Add </button>
     
        <button onClick={remove}>Remove </button>
        
      </header>
    </div>
  );
}

export default App;
