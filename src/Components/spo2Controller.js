import React,{useState} from 'react';
import Spo2 from './Spo2'
import Instructions from './Spo2Instructions/index.jsx'

function TestScreenController(props) {

    console.log(props);

    const [pressed,changePressed]=useState(false);

    const onMeasureVitlas=()=>
    {
        changePressed(true);
    }


    return (
        <div>
            {
                (pressed)?(
                    <Spo2 {...props}/>
                ):(
                    <Instructions {...props} onMeasureVitlas={()=>onMeasureVitlas()} />
                )
            }
        </div>
    );
}

export default TestScreenController;