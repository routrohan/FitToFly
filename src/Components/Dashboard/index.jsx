import React, { useEffect, useState } from 'react';
import './index.css';
import {Spinner} from 'react-bootstrap'

function Index(props) {

    const [loader,changeLoader]=useState(false);


    const getLoadingData=()=>
    {
        return(<div className="load-box">
        <div className="spin">
        <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      </div>
      <h4>Please wait while we fetch your results</h4>
      </div>
      )
    }

    const getResults=()=>
    {
        return (
            <div className="result-box">
            <h4>Your results are here : </h4>
            <div className="result-item">
            <h5>Heart Rate :</h5> 
            <h5 className="value">10</h5>
            </div>
            <div className="result-item">
            <h5>Respiratory Rate :</h5> 
            <h5 className="value">10</h5>
            </div>
            <div className="result-item">
            <h5>SPO2 :</h5> 
            <h5 className="value">10</h5>
            </div>
            </div>)
    }
    

    useEffect(()=>
    {
        
        var spo2 = props.spo2.split(',')[1];
        var heart=props.heart.split(',')[1];

        console.log(spo2);
        console.log(heart);

        const data={frames:spo2};

        fetch("https://cors-anywhere.herokuapp.com/https://sabre-hacks.herokuapp.com/spo",{
           method:"POST",
           body:JSON.stringify(data)
        })
        .then(data=>console.log(data));
    },[])


    console.log(props);
    return (
        <div className="dash">
        <h1>Dashboard</h1>
        <div className="img-box">
        <h3>Your Captures : </h3>
        <img src={props.heart}/>
        <img src={props.spo2}/>
        </div>
        <div className="result">
        {
            (loader)?getLoadingData():getResults()
        }
        </div>
        </div>
    );
}

export default Index;