import React from 'react';
import "./Feedback.css"


const Feedback = () => {
    return(
        <section className="feed" id="feed">
        <div className="max-width">
            
            <div className="carousel owl-carousel">
                <div className="card">
                    <div className="box">
                       
                        <div className="text">Lucila Marcaida</div>
                        <p>Excelente en el area de A & B</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                   
                        <div className="text">Clara Harriague</div>
                        <p>Muy buen manejo del restaurante.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                  
                        <div className="text">Gisela Farabollini</div>
                        <p>Muy buena diseñadora </p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    
                        <div className="text">Valentina Seresi</div>
                        <p>Excelente en eventos .</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                      
                        <div className="text">Candelaria Ruiz</div>
                        <p>Muy talentosa.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    )
}

export { Feedback }