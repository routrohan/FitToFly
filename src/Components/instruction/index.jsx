import React from 'react';
import './index.css';



function Instructions(props) {

const {onMeasureVitlas}=props; 


    return (
        <div className="main-box">

        <div className="head">
        <h1>Instructions</h1>
        <h2>Heart & Respiratory Rate Measurement</h2>
        <br/>
        </div>

        <div className="cbody">
        <h5>
        To measure your vitals successfully, read the following instructions carefully:<br/><br/>
        
        1. Please sit in an upright position and face the camera.<br/><br/>
        2. Make sure the face is well lit.<br/><br/>
        3. Once you are ready, hit on the Measure button and wait for the camera to capture your image. While this process is happening, please stay as still as you can.<br/><br/>
        4. After capturing the image please wait for about 15-20 seconds for a alert message before hitting the Next button<br/><br/>
        </h5>
        </div>

        <div className="foot">
        <img height="400px" width="400px" src="https://www.clipartkey.com/mpngs/m/276-2769481_test-clipart-sit-and-reach-cartoon-of-someone.png"/>
        <button onClick={()=>onMeasureVitlas()} className="button-box">Measure Vitals&nbsp;&nbsp;&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
      </svg></button>
        <br/>
        <br/>
         The images captured will be used for internal training purposes. By proceeding further, you agree to the same.
        </div>
        </div>
    );
}

export default Instructions;