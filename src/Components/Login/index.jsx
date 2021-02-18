import React, { useState } from 'react';
import './index.css';
import TestScreenController from '../testScreenController.js';
import LoginComponent from '../LoginComponent';
import Home from '../Home';

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
                        (!buttonState) ? dashData(): <TestScreenController />
                    }
                </div>
    );
}

export default Index;