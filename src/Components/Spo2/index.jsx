import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import './index.css';
import Dashboard from '../Dashboard'

 
function App (props) {

  console.log(props);
    const [taken,ChangeTaken]=useState(false);
    const [dataUri,setDataUri]=useState("");

    const [moveToDasboard,changemoveToDashboard]=useState(false);


    const {onSumbitPhoto}=props;

    console.log(props);

    const reTake=()=>
    {
        ChangeTaken(false);   
    }

    const onClickNext=()=>
    {
      changemoveToDashboard(true);
    }

    const renderPhoto=()=>
    {

        return <div className="photo-box"><img src={dataUri}/>

        <button className="button-box" onClick={()=>reTake()}>Take Again</button>
        <button className="button-box" onClick={()=>onClickNext()}>Next&nbsp;&nbsp;&nbsp;
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

      {
        (moveToDasboard)?<Dashboard {...props} spo2={dataUri} />:(
          <div className="mainBox">
      <h1>Vital Test</h1>
      <h2>SPO2 Test Rate</h2>
      {
          (!taken)?renderCamera():renderPhoto() 
      }
      </div>
    )
      }
    </div>
  );
}
 
export default App;