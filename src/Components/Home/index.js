import React from 'react';
import "./index.css";
import Logo from './logo.jpeg';
import pic from './hero_right.png';

function Home(props) {
    return (
        <div className="home">
        <div className="top">
        <img src={Logo} width="100" height="120" />
        </div> 
        <div className="content">
        <div className="item left">

        <h1> Fit-to-fly</h1>

        <br/>

       


        <h5>        This tool helps you to assess your vital levels remotely , all by your self and at your own comfort. It warns you in case of unhealthy vital levels, helping you to plan your outing accordingly. 
        </h5>

        <button  onClick={()=>props.getStarted()} className="head-btn">Get Started</button>

        </div>
        <div className="item right">
        <img src={pic} width="600" height="800" />
        </div>
        </div>
        </div>
    );
}

export default Home;