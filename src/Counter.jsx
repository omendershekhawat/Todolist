import React,{useState}from 'react'
function Counter(){
  
    
    const [counter, setCounter]=useState(0);
    function incrementCounter(){
        setCounter(counter+1)
    }
    function decrementCounter(){
        setCounter(counter-1);
    }

    return(
        <>
      <button onClick= {incrementCounter} disabled={counter === 10}>Increment</button>
      <p>{counter}</p>
      <button onClick={decrementCounter}disabled={counter=== 0}>Decrement</button>
        </>
    )
}
    // console.log(counter)

export default Counter;