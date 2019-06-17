import React, { Component } from 'react';
import Nav from './Navigation/Nav';
import Hero from './Hero/Hero';
import  './Hero/Hero.css';



 class Main extends Component {

    render() {
        return(
           <div>
                <Nav/>
                {/* hero */}
                <Hero/>
            {/* nest section of the list display */}
           </div>
        )
    }
comp

}
export default Main;
