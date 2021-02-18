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
        <button className="button-box" onClick={()=>onClickNext()}>Next</button>

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
      <div className="mainBox">

      {
        (moveToDasboard)?<Dashboard {...props} spo2={dataUri} />:(
          <div>
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