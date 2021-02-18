import React from 'react';
import './index.css';

function Instructions(props) {

const {onMeasureVitlas,heart}=props; 


    return (
        <div className="main-box">

        <div className="head">
        <h1>Instructions</h1>
        <h2>SPO2 Measurement</h2>
        </div>

        <div className="cbody">
        <h3>
        To measure your SpO2 successfully, read the following instructions carefully:
        <br/>
        
     


1. Please sit in an upright position and face the camera.
2. Place your finger at a distance of 3-5 cms as shown below.
3. Once you are ready, hit on the Measure button and wait for the camera to capture your finger's image. While this process is happening, please stay as still as you can.
4. After capturing the image please wait for about 5-10 seconds for a alert message before hitting the Next button
<br/>
        </h3>
        </div>

        <div className="foot">
        <img height="400px" width="400px" src="https://www.clipartkey.com/mpngs/m/276-2769481_test-clipart-sit-and-reach-cartoon-of-someone.png"/>
        <button onClick={()=>onMeasureVitlas()} className="button-box">Measure SPO2</button>
        <br/>
        <br/>
         The images captured will be used for internal training purposes. By proceeding further, you agree to the same.
        </div>
        </div>
    );
}

export default Instructions;