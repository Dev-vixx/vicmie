import React from 'react';
import nodeImg from '../../asset/tech-img/node.png';
import awsImg from '../../asset/tech-img/aws.png';
import doImg from '../../asset/tech-img/do.png';
import reactImg from '../../asset/tech-img/react.png';
import githubImg from '../../asset/tech-img/github.png';
import './Tech.css';
class Tech extends React.Component{
    // box changes
    switchState = (e) =>
    {
        // e.target.firstChild.style.transform = "skewX(4deg)";
        let f = {...this.state};
   let a = setInterval(()=>
    {
        let r = Math.ceil(Math.random()*this.state.tech.length - 1);
        let cloneState = f.tech;
        let cloneStateVal = cloneState.splice(r-1,1);
        cloneStateVal[0] ===  undefined ?   console.warn("err not of same type"): cloneState.push(...cloneStateVal);
        this.setState({
            tech: cloneState
        })
        clearInterval(a);
       
    }, 2000);
    }
    // fake ajax call
    stop = () =>
    {
        fetch("/technologies", {
            headers: {
                title: "what a mess"
            },
            method: "get"
        })
        .then(res=>console.log(res.url))
    }
    // state manager
    state = {
        tech : [
            {
                title: "node",
                src: nodeImg
            },
            {
                title: "aws",
                src:  awsImg
            },
            {
                title: "digital ocean",
                src: doImg
            },
            {
                title: "github",
                src: githubImg
            },
            {
                title: "react",
                src: reactImg
            },
            {
                title: "node",
                src: nodeImg
            },
            {
                title: "aws",
                src:  awsImg
            },
            {
                title: "digital ocean",
                src: doImg
            },
            {
                title: "github",
                src: githubImg
            },
            {
                title: "react",
                src: reactImg
            }
        ]
    }
    render() {
        return (
               <div>
                    <h4 className="tec">Technologies</h4>
                    <div className="_D_F _F_C" id="tech" onMouseOver={this.switchState} onMouseOut={this.stop}>
                    <div className="_TXT_C _tech">
                    {this.state.tech.map((v,i)=>{
                        return (
                            <div key={i} className="box">
                                <h5>{v.title}</h5>
                                <img src={v.src} alt={v.title}/>
                            </div>
                        )
                    })};
                </div>
                </div>
               </div>
        );
    }
}

export default Tech;
