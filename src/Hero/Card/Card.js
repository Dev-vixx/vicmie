import React, { Component } from 'react';
import './card.css';
export class Card extends Component {
    render() {
        return (
            <div className=" _D_F _F_C" id="service">
                <div className="vw">
                        {/* <h2 className="_TXT_C">why work with us</h2> */}
                    <div className="card _F1">
                       <div className="f1">
                            <h5>What we Do</h5>
                            <p>Vicmie offers professional digital services and solutions to small businesses and lean enterpreneurs within West Africa and beyond, ranging from social media services, online identity management, websites and mobile application development, Enterprise Relation, Invoicing and Accounting Solution.</p>
                       </div>
                       <div className="f1">
                       <h5>Mode Of Work</h5>
                            <p>At Vicmie, we are able to simplify the development process, using the Agile Methodology and SCRUM, 
                            we reach your MVP Faster using cutting edge technologies, lower burnouts, and better digital output on 
                            both your marketing, application development objectives.</p>
                       </div>
                       <div className="f1">
                       <h5>Why Work With Us</h5>
                            <p>web developers, graphic designers and software engineers. We can handle any project with ease - big or small, 
                            We are a platforms solution architect for companies that require software and technology to innovate their processes.
                            </p>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
