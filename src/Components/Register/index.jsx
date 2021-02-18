import React, { useState } from 'react';
import './index.css';
import TestScreenController from '../testScreenController.js';
import LoginComponent from '../LoginComponent';

function Index(props) {

    const [buttonState,changeState]=useState(false);

    const onSubmit=()=>
    {
        changeState(true);
    }

    return (
        <div>
        {
            (!buttonState)?<LoginComponent onSubmit={()=>onSubmit()} /> : <TestScreenController/>
        }
        </div>
    );
}

export default Index;