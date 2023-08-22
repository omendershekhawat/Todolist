import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <img src="https://english.cdn.zeenews.com/sites/default/files/Ram-Mandir-Ayodhya.jpg" alt="" />
      <img src="https://wallpaperaccess.com/full/2523126.jpg" alt="" />
      <img src="https://wallpapercave.com/wp/wp2610453.jpg" alt="" />
      <img src="https://tse3.mm.bing.net/th?id=OIP.l0sFp1gkbyWjuovxVHkM0AHaF0&pid=Api&P=0&h=180" alt="" />
    </div>
    <button>visit</button>
    <h1>jai shree ram  </h1>
    <label htmlFor="">First name</label>
    <input type="text"  /><br />
    <label htmlFor=""> Last name</label>

    <input type="text"  /><br />
    <label htmlFor="">Address</label>
    <input type="text"  /><br />
    <label htmlFor="">E mail</label>

    <input type="text"  /><br />
    <p>The Ram Mandir is a Hindu temple that is being built in Ayodhya, Uttar Pradesh, India, at the site of Ram Janmabhoomi, the hypothesized birthplace of Rama, a principal deity of Hinduism.[5] The temple construction is being supervised by the Shri Ram Janmabhoomi Teerth Kshetra</p>
    </>

   
  )
 
  }

export default App
