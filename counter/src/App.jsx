import { useState } from 'react'
import "./component/style.css"


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div> The count is {count} <br></br>
    <div className='buttons'>
    < button onClick={()=>{setCount(count+1)}}>increasing</button>
    <button onClick={()=>{setCount(count-1)}}>decreasing</button>
    
    <button onClick={()=>{setCount(count*2)}}>squre</button>
    <button onClick={()=>{setCount(count*3)}}>cube</button>
    </div>
    </div>
    
    </>
  )
}

export default App
