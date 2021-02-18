import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import './index.css';
import Spo2Controller from '../spo2Controller.js';
 import SPO2Comp from '../Spo2';


function App (props) {



    const [taken,ChangeTaken]=useState(false);
    const [dataUri,setDataUri]=useState("");

    const [moveToSpo2,changemoveToSpo2]=useState(false);


    const {onSumbitPhoto}=props;

    const reTake=()=>
    {
        ChangeTaken(false);   
    }

    const onClickNextButton=()=>
    {
        changemoveToSpo2(true);

    }

    const renderPhoto=()=>
    {

        return <div className="photo-box"><img src={dataUri}/>

        <button className="button-box" onClick={()=>reTake()}>Take Again</button>


        <button className="button-box" onClick={()=>onClickNextButton()}>Next&nbsp;&nbsp;&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
      </svg></button>

        </div>

    }


    const renderCamera=()=>
    {
        return(
            <div className="photo-box">

        <Camera
          onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        />
        </div>
        )
    }


  function handleTakePhoto (data) {


    console.log('takePhoto');
    ChangeTaken(true);
    setDataUri(data);
  }
 
  return (

    <div>
      { (moveToSpo2)?<Spo2Controller heart={dataUri} />:(
      <div className="mainBox">
      <h1>Vital Test</h1>
      <h2>Heart Rate and Respiratory Rate</h2>
      {
          (!taken)?renderCamera():renderPhoto() 
      }
    
    </div>)
      }
      </div>
  );
}
 
export default App;