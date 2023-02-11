import React from "react";
import './Navbar.css'

const Navbar =() => {
    return(
        <div>
        <nav className="navbar">

                   <div className="logo">
                    <a href="#">Portfo<span>lio.</span></a>
                    </div>
                
                <ul className="menu">

                    
                    <li><a href="#home" className="menu-btn">Home</a></li>
                    <li> <a href="#services" className="menu-btn">Services</a></li>
                    <li> <a href="#skills" className="menu-btn">skills</a></li>
                     <li><a href="#teams" className="menu-btn">Teams</a></li>
                    <li><a href="#contact" className="menu-btn">Contact</a></li>

                    <li> <a className="btnCv"
                        href="">Download
                        CV</a></li>

                
                 </ul>
                 


        </nav>
        </div>
    )
}
export {Navbar}