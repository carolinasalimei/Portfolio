import React from 'react';
import "./Contact.css"

const Contact = () => {
    return(
        <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">


                <div className="column right">
                    <div className="text">Message me</div>
                    <form action="" id="form"  className="form"  method="post">
                        <div className="fields">
                            <div className="field name">
                                <label for="name">Nombre y Apellido </label>
                                <input type="text" name="name" id="name" placeholder="" required/>
                              
                            </div>
                            <div className="field email">
                                <label for="email">Email </label>
                                <input type="email" name="mail" id="mail" placeholder="" required/>
                               
                            </div>
                        </div>
                        <div className="field">
                            <label for="subject">Subject </label>
                            <input type="text" name="subject" id="subject" placeholder="" required/>
                       
                        </div>
                        <div className="field textarea">
                            <label for="message">Message... </label>
                            <textarea cols="30" rows="10" name="message" id="message" placeholder="" required></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit" value="submit">Send message</button>
                        </div>
                    </form>
                 
                    
                   
                </div>
                <div className="icons first">
                <li><a href="https://www.facebook.com/carolina.salimei.509511"><span className="fab fa-facebook-f"></span></a></li>
                <li><a href="https://www.instagram.com/carosalimei_/?hl=es"><span className="fab fa-instagram"></span></a></li>
                <li> <a href="https://www.linkedin.com/in/carolina-salimei-a6279922b/"><span className="fab fa-linkedin-in"></span></a></li>
                <li><a href="https://github.com/carolinasalimei"><span className="fab fa-github"></span></a></li>

            </div>
         
               

          

               
          
        </div>
        </div>

    </section>
   
    )
}

export { Contact }