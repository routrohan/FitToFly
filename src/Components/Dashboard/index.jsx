import React, { useEffect, useState } from 'react';
import './index.css';
import {Spinner} from 'react-bootstrap'
import axios from 'axios';

import Upload from '../Upload/index';


function Index(props) {

    const [moveToUplaod,changeMoveToUpload]=useState(false);


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

  

    const onContinue=()=>
    {
        changeMoveToUpload(true);   
    }

    const getDashData=()=>
    {
        return (
            <div className="dash">
            <h3>Your Captures : </h3>
            <div>
            <img src={props.heart}/>
            <img src={props.spo2}/>
            </div>
    
            <button onClick={()=>onContinue()}  className="button-box" >Continue&nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
    
            </button>
            </div>
        );

    }

    const uploadPage=()=>
    {
        return <Upload {...props}/>
    }
    

    


    console.log(props);
    return (
        <div>

        {
            (moveToUplaod)?(uploadPage()):(getDashData())
        }
        
        </div>
    );
}

export default Index;