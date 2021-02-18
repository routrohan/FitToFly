import React, { useState } from 'react';
import './index.css';

import UplaodFile from '../FileUpload/index';

import Results from '../Result';


function Index(props) {

    console.log(props);
    const [showFileUplaod, changeShowFileUplaod] = useState(false);
    const [moveToResults, changeMoveToResults] = useState(false);
    const [files, changeFiles] = useState([]);



    const onClickYes = () => {
        changeShowFileUplaod(true);
    }

    const onClickNo = () => {
        changeMoveToResults(true);
    }


    const getResultsData = () => {
        return <Results {...props} files={files} />
    }

    const continueClick=(files)=>
    {
        console.log(files);
        changeFiles(files);
        changeMoveToResults(true);

    }

    const getBoxData = () => {

        return (
            <div className="report-box">
                <h1>Reports</h1>
                <div className="report-inner">
                    <h5>Do you want to upload your lastest COVID test report ?</h5>
                    <div className="btns">
                        <button className="result-btn" onClick={() => onClickYes()}>Yes</button>
                        <button style={(showFileUplaod) ? { backgroundColor: "#3895D3" } : {}} className="result-btn" onClick={() => onClickNo()}>No</button>
                    </div>


                </div>


                {
                    showFileUplaod && <div className="report-inner">
                        <UplaodFile {...props} continueClick={(files)=>continueClick(files)} />            </div>



                }



            </div>
        )

    }


    const getDashData = () => {
        // return(

        //     ()?:():()
        // )
    }


    return (
        <div>
            {

                (moveToResults) ? (getResultsData()) : (getBoxData())
            }
        </div>
    );

}
export default Index;