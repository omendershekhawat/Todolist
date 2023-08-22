import React,{useState} from 'react'

function Colorbox() {

    const[height,setHeight]=useState('')
    const[width,setWidth]=useState('')
    const[backgroundColor,setBackgroundColor]=useState('')
    const[styles, setCustomStyle]=useState()


    function setStyles(){
        const obj = {widht:widht+"px", height:height+"px",backgroundColor: backgroundColor}
        setCustomStyle(obj)
    }
  return (
    <>
   
    <input type="text" value={width} onChange={(e) =>setWidth(e.target.value)} />
   
    <input type="text" value={height} onChange={(e) =>setHeight(e.target.value)}/>
    
    <input type="text" value={backgroundColor} onChange={(e) =>setBackgroundColor(e.target.value)}/>
    <button onClick={view} >show</button>
   

    <div style={styles}></div>
    </>
  )
}

export default Colorbox
