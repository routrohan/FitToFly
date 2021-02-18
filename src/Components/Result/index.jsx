import React, { useEffect, useState } from 'react';
import './index.css';
import { Table } from 'react-bootstrap';
import axios from 'axios';

function Index(props) {


    const { spo2, heart, files } = props;

    

    const [spoResult, changespoResult] = useState("");
    const [heartResult, changeheartResult] = useState("");


    useEffect(() => {

        var spo2 = props.spo2.split(',')[1];
        var heart = props.heart.split(',')[1];

        console.log(spo2);
        console.log(heart);

        let SPO2Data = { frames: heart };

        let Heartdata = { frames: heart };

        SPO2Data = JSON.stringify(SPO2Data);
        Heartdata = JSON.stringify(Heartdata);

        const options = {
            headers: { 'Content-Type': 'application/json' }
        };

        axios.post("https://sabre-hacks.herokuapp.com/spo", SPO2Data, options)
            .then(data => changespoResult(data));


        axios.post("https://sabre-hacks.herokuapp.com/hr", Heartdata, options)
            .then(data => changeheartResult(data));

    }, [])


    const getResults = () => {
        console.log(spoResult);
        console.log(heartResult);
        return (
            <div style={{ padding: "30px 10px" }} className="result-box">
                <div className="result-item">
                    <h5>Heart Rate :</h5>
                    <h5 className="value">{heartResult && heartResult.data.split(',')[0]}</h5>
                </div>
                <div className="result-item">
                    <h5>Respiratory Rate :</h5>
                    <h5 className="value">{heartResult && heartResult.data.split(',')[1]}</h5>
                </div>
                <div className="result-item">
                    <h5>SPO2 :</h5>
                    <h5 className="value">{spoResult && spoResult.data}</h5>
                </div>

                <div className="tables">
                    <div className="table-box">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr style={{ backgroundColor: "#3895D3" }} >
                                    <th>#</th>
                                    <th>Heart Rate(bpm)</th>
                                    <th>Respiratory Rate</th>
                                    <th>Oxygen Saturation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ backgroundColor: "green" }}>
                                    <td>Safe</td>
                                    <td>70-100</td>
                                    <td>12-18</td>
                                    <td>95 or above</td>
                                </tr>
                                <tr style={{ backgroundColor: "yellow", color: "black" }}>
                                    <td>Average</td>
                                    <td>55-70</td>
                                    <td>10-11</td>
                                    <td>90-95</td>
                                </tr>
                                <tr style={{ backgroundColor: "red" }}>
                                    <td>Risky</td>
                                    <td>100 or above</td>
                                    <td>8-12</td>
                                    <td>90 or below </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </div>
                <h4>Analysis</h4>
                {
                    (spoResult && heartResult) ? (


                        (heartResult.data[0] == 'F' || spoResult.data[0] == 'F') ? (<h5 style={{color:"black"}}>Your Captured images are unrecognizable</h5>) : (
                            <div className="verdict">
                                {

                                    (() => {
                                        const data1 = parseFloat(heartResult.data.split(',')[0]);
                                        const data2 = parseFloat(heartResult.data.split(',')[1]);
                                        const data3 = parseFloat(spoResult.data);

                                        if (data1 >= 70 && data1 <= 100 && data2 >= 12 && data2 <= 18 && data3 >= 95)
                                            return <h5 style={{color:"green"}}>Your Vitals are within the safe limits .Have a Safe Journey</h5>
                                        else
                                            return <h5 style={{color:"red"}}>  Your Vitals seem to deviate from the safe range.
                                               We suggest you to get tested before proceeding </h5>

                                    })()

                                }
                            </div>
                        )
                    ) : (<div />)

                }
            </div>
        )
    }

    console.log(props);
    return (
        <div className="result-box">
            <h1>Results</h1>
            {getResults()}
        </div>
    );
}

export default Index;