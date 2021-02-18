
import React,{useState} from 'react';
import Test from './Test/index.jsx'
import Instructions from './instruction/index.jsx'

function TestScreenController(props) {

    const [pressed,changePressed]=useState(false);

    const onMeasureVitlas=()=>
    {
        changePressed(true);
    }


    return (
        <div>
            {
                (pressed)?(
                    <Test/>
                ):(
                    <Instructions onMeasureVitlas={()=>onMeasureVitlas()} />
                )
            }
        </div>
    );
}

export default TestScreenController;