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


        <button className="button-box" onClick={()=>onClickNextButton()}>Next</button>

        </div>

    }


    const renderCamera=()=>
    {
        return(
            <div>

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