import React from 'react';
import nodeImg from '../../asset/tech-img/node.png';
import awsImg from '../../asset/tech-img/aws.png';
import doImg from '../../asset/tech-img/do.png';
import reactImg from '../../asset/tech-img/react.png';
import githubImg from '../../asset/tech-img/github.png';
import firebase from '../../asset/tech-img/firebase.png';
import redis from '../../asset/tech-img/redis-official.svg';

import './Tech.css';
class Tech extends React.Component{
    // box changes
    switchState = (e) =>
    {
        // e.target.firstChild.style.transform = "skewX(4deg)";
        let f = {...this.state};
    let a = setInterval(()=>
    {
        let r = Math.ceil(Math.random()*this.state.tech.length - 1); // r holds the value of a roundom figure
        let cloneState = f.tech; //clonestate is equal to the value of the tech in the state of the application
        let cloneStateVal = cloneState.splice(r-1,1);//picking up a roundom index
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
                title: "redis cache",
                src: redis
            },
            {
                title: "firebase",
                src: firebase   
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
