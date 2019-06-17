import React from 'react';
import './Nav.css';
import Links from './Links';
class Nav extends React.Component {
    componentDidMount()
    {
        // window.addEventListener("keydown",(e)=>
        // {
        //     alert(e.key);
        // }
        // )
        window.addEventListener("scroll", ()=>
        {this.setState({scroll: {opacity: 0}})
            if(window.scrollY > 400)
            {
                this.setState({
                    scroll: {
                        background: "#011627fa",
                        boxShadow: "0 2px 5px #011627",
                        position: "fixed",
                        opacity: 1
                    }
                })
            }
            else if(window.scrollY < 200)
            {
                this.setState({
                    scroll: {
                        background: "transparent",
                        boxShadow: "none"
                    }
                })
            }
        })
    }
    state = {
        scroll: {
            
        }
    }
     render()  { 
         return (
            <div className="_bar" style={{...this.state.scroll}} >
            {/* BRAND LOGO HERE */}
                <div className="abs _brand _D_F">
                   <div> <a href="/" className="_a">vicmie</a> </div>
                    <Links />
                </div>
                {/* END OF BRANDING HERE */}
                {/* END OF THE NAV BAR */}
                <div className="_D_F _F_E _P_R5 _P_T1-5 _T_CA">
                    <div className="_search">
                       <input type="text" placeholder="looking for anything? "/>
                    </div>
                    <div className="_expo">
                        <a href="/">go to expo</a>
                    </div>
                </div>
            </div>
        )}
}

export default Nav
