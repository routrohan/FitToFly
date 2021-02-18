import React, { useEffect, useState } from 'react';
import './index.css';
import { Spinner, Table } from 'react-bootstrap';
import axios from 'axios';
import {Modal,Button} from 'react-bootstrap';

import jsPDF from 'jspdf';
import { renderToString } from "react-dom/server";



function Index(props) {


    const { spo2, heart, files } = props;
    let message = ""


    const [spoResult, changespoResult] = useState("");
    const [heartResult, changeheartResult] = useState("");
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const showModel=()=>
    {
        return( <Modal style={{backgroundColor:"rgba(18,97,160,0.4)",paddingTop:"100px",display:"flex",alignItems:"center"}} show={show} onHide={handleClose}>
        <div style={{padding:"15px 8px",border:"4px solid #1261A0"}}>
            
            <div style={{textAlign:'center'}}><img style={{margin:"10px",border:"3px solid #3895D3"}}   height="150" width="150"  src={props.heart}/>
            <img style={{margin:"10px",border:"3px solid #3895D3"}}    height="150" width="150" src={props.spo2}/>
            <div className="spin">
            <Spinner style={{color:"#072F5F"}} animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          </div>            </div>
            <h4 style={{color:"#1261A0",fontWeight:"800",textAlign:"center"}} >Please wait we are processing your images</h4>
            </div>
           
          </Modal>)
    }

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
            .then(data => { changespoResult(data) });


        axios.post("https://sabre-hacks.herokuapp.com/hr", Heartdata, options)
            .then(data =>{ changeheartResult(data);setShow(false)});

    }, [])

    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
      };
      const colstyle = {
        width: "40%"
      };
      const tableStyle = {
        width: "100%"
      };
      const wrapStyle = {
          whiteSpace: "unset"
      }

    const Prints = () => (
        <div>
          <h1>Fit-To-Fly Test Report</h1>
          <br/>
          <br/>
          <h3 style={wrapStyle}>
          Fit-To-Fly helps you to assess your vital levels remotely , all by your self <br/> and at your own comfort.It warns you in case of unhealthy vital levels,<br/>helping you to plan your outing accordingly.
          </h3>
          <br/>
          <h3>Result:</h3>
          <table id="tab_customers" class="table table-striped" style={tableStyle}>
            <colgroup>
              <col span="1" style={colstyle} />
              <col span="1" style={colstyle} />
            </colgroup>
            <thead>
              <tr class="warning">
                <th>Heart-Rate</th>
                <th>Respiratory</th>
                <th>SpO2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{heartResult.data.split(',')[0]}</td>
                <td>{heartResult.data.split(',')[1]}</td>
                <td>{spoResult.data}</td>
              </tr>
            </tbody>
          </table>
          <h3>
            Analysis: <br/>{message}
          </h3>
        </div>
      );

    const print = () => {
        const string = renderToString(<Prints />);
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.fromHTML(string);
        pdf.save("Report");
      };

    


    const getResults = () => {
        console.log(spoResult);
        console.log(heartResult);
        return (
            <div style={{ padding: "30px 10px" }} className="result-box">         
            {
                showModel()
            }   
                <div className="result-item">
                    <h5 className="res-label">Heart Rate :</h5>
                    <h5 className="value">{heartResult && heartResult.data.split(',')[0]}(bpm)</h5>
                </div>
                <div className="result-item">
                    <h5 className="res-label">Respiratory Rate :</h5>
                    <h5 className="value">{heartResult && heartResult.data.split(',')[1]}(bpm)</h5>
                </div>
                <div className="result-item">
                    <h5 className="res-label">Blood Oxygen Saturation :</h5>
                    <h5 className="value">{spoResult && spoResult.data} (%)</h5>
                </div>

                <div className="tables">
                    <div className="table-box">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr style={{ backgroundColor: "#3895D3" }} >
                                    <th>level</th>
                                    <th>Heart Rate(bpm)</th>
                                    <th>Respiratory Rate(bpm)</th>
                                    <th>Oxygen Saturation(%)</th>
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
                <h4 style={{fontSize:"3rem"}} >Verdict</h4>
                {
                    (spoResult && heartResult) ? (


                        (heartResult.data[0] == 'F' || spoResult.data[0] == 'F') ? (<h5 style={{color:"black"}}>Your Captured images are unrecognizable</h5>) : (
                            <div className="verdict">
                                {

                                    (() => {
                                        const data1 = parseFloat(heartResult.data.split(',')[0]);
                                        const data2 = parseFloat(heartResult.data.split(',')[1]);
                                        const data3 = parseFloat(spoResult.data);

                                        let message1="Your Vitals are within the safe limits . You are good to travel . Have a Safe Journey";
                                        let message2=" Your Vitals seem to deviate from the safe range We suggest you to get tested before proceeding to travel"



                                        if (data1 >= 70 && data1 <= 100 && data2 >= 12 && data2 <= 18 && data3 >= 95)
                                           {
                                               message=message1;
                                                return <h5 style={{color:"green"}}>{message}</h5>
                                           }
                                        else
                                        {
                                            message=message2;
                                            return <h5 style={{color:"red"}}>{message}  </h5>
                                        }

                                    })()


                                }
                                <div className="generate">
                                <button className="generate-btn" onClick={print}>Generate Report</button>
                                </div>
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