import React from 'react';
import './Hero.css';
import '../Main.css';
import Card from './Card/Card';
import Tech from './Tech/Tech';
const Hero = () => {
    return (
      <section>
           <div className="header">
            <div className="_Hero">
            <div className="_CNT"> 
                <div className="_D_F _F_C _F_D_C _TXT_C">
                    <h1 className="_FFF ">Mobile & Web App Development for your Startup or Business</h1>
                    <p>We provide professional application development services and consultations for businesses, Check out the main advantages of working with us.</p>
                </div>
              {/* flexing the list and the image */}
              <div className="_D_F">
              <div className="f1">
                    <ul>
                        <li>Save development cost by 60%</li>
                        <li>Minified time spent during MVP</li>
                        <li>Apps works perfectly in offline mode</li>
                        <li>Optimized server side rendering</li>
                        <li>Apps runs on cross platform devices</li>
                        <li>Asyncronious REST Api</li>
                    </ul>
                    <div id="quote">
                    <a href="/">
                    Plan
                    </a>
                </div>
                </div>
                {/* next section for image  */}
                <div className="f1" id="jumboIMG">
                    image here
                </div>
              </div>
               
            </div>
        </div>
       </div>
       {/* card section comes in here for rendering here */}
       <Card/>
       <Tech/>
      </section>
    )
}

export default Hero;
