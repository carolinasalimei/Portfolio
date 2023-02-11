import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
    
      <Navbar/>
      <Footer/>
    

   
     
    </div>
  )
}

export default App
