import React from 'react';
import './Home.css'

const Home = (props) => {
    return(
        <section className="home" id="home">
        <div className="max-width">

            <div className="home-content">

                <div className="text-1">Mi nombre es,</div>
                <div className="text-2">Carolina Salimei</div>
                <div className="text-3">Soy <span className="typing"></span>
              
                </div>
                <a href="#">Hire Me</a>
                <a className="btnMore" href="#">Learn more</a>

            </div>
        </div>
       
    </section>
    )
}

export { Home }