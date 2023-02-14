import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import { Teams } from './components/Teams/Teams'
import { About } from './components/About/About'
import { Services } from './components/Services/Services'
import { Feedback } from './components/Feedback/Feedback'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'







function App() {



  return (
    <div>
      <div className="scroll-up-btn">
            <i className="fas fa-angle-up"></i>
        </div>
<Navbar/>
<Home />
<Teams/>
<About/>
<Services/>
<Feedback/>
<Contact/>
<Footer/>

</div>
  )
}

export default App
