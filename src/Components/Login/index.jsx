import React, { useState } from 'react';
import './index.css';
import TestScreenController from '../testScreenController.js';
import LoginComponent from '../LoginComponent';
import Home from '../Home';
import Logo from '../Home/logo.jpeg';

function Index(props) {

    const [buttonState, changeState] = useState(false);

    const getStarted = () => {
        changeState(true);
    }

    const dashData = () => {
        return (
            <div>
           <Home getStarted={()=>getStarted()} />
            </div>
        )
    }

    return (
                <div>
                    {
                        
                        (!buttonState) ? dashData(): (<div className="login-comp" style={{height:"100vh"}}> 
                        <img  src={Logo} width="280" height="220" />
                         <LoginComponent /></div>)
                    }
                </div>
    );
}

export default Index;