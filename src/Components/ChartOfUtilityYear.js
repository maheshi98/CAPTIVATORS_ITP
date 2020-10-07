import React, { useState, useEffect} from "react";
import './Style.css';
import {Line} from 'react-chartjs-2';
import { Jumbotron } from "react-bootstrap";
import UtilityYear from "./UtilityYear";
import Utilitynavbar from './UtilityNavbar';



    const ChartOfUtilityYear = () => {
        const [chartData, setChartData] = useState({})
    
        const chart = () => {
          setChartData({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September','October','November','December'],
            datasets: [{
              label: 'Cost of Month',
              data: [2300, 3190, 5265, 5100, 3100, 6301, 4110, 5100, 3100],
              backgroundColor: ['#98AFC7'],
              borderWidth: 4              
            }]
          })
        }
      
    
            useEffect(() => {
                chart()
            }, [])  

            return(
                <div className="App">

                    <center>
                        <div style= {{height: "600px", width: "600px"}}>
                            <UtilityYear/>
                        </div>
                    </center>
                    
                    <center><div style= {{
                        height: "800px", width: "800px"
                        
                    }}>

                    <Jumbotron className = "bg-light text-black">
                        <h2>Chart of Utility Year</h2><br/> <br/>
                        <Line data={chartData} options={{
                            responsive: true,
                            //title: {text: 'Chart of Utility Month', display: true, fontColor:'black'},
                            scales: {
                                yAxes:[{
                                    ticks:{
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: true,
                                        color: 'silver'
                                    }
                                }],

                                xAxes:[{
                                    gridLines: {
                                        display: true,
                                        color: 'silver'
                                    }
                                }]
                            }
                        }} /> 
                        </Jumbotron>
                    </div></center>
                </div>
            )
        }

    export default ChartOfUtilityYear;