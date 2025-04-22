
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  let [count,setCount] = useState(0)
  return (

    <div>
     <p data-testid="counter-text">Button clicked {count} times</p> 
      <button onClick={()=>{
        setCount(count+1)
      }}>Click</button>
    </div>
  )
}

export default App
