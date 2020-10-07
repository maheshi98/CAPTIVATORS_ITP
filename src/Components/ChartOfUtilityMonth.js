import React, { useState, useEffect} from "react";
import './style.css';
import {Line} from 'react-chartjs-2';
import { Jumbotron } from "react-bootstrap";
import UtilityMonth from './UtilityMonth';


    const ChartOfUtilityMonth = () => {
        const [chartData, setChartData] = useState({})
    
        const chart = () => {
          setChartData({
            labels: ['Previous Month', 'Select Month', 'Next Month'],
            datasets: [{
              label: 'Cost of Month',
              data: [5100, 3550, 4000],
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
                            <UtilityMonth/>
                        </div>
                    </center>
                    
                    
                    <center><div style= {{
                        height: "800px", width: "800px"
                        
                    }}>

                    <Jumbotron className = "bg-light text-black">
                        <h2>Chart of Utility Month</h2><br/> <br/>
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

    export default ChartOfUtilityMonth;