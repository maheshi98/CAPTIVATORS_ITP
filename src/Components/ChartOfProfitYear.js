import React, { useState, useEffect} from "react";
import './style.css';
import {Line} from 'react-chartjs-2';
import { Jumbotron } from "react-bootstrap";
import ProfitYear from './ProfitYear';


    const ChartOfProfitYear = () => {
        const [chartData, setChartData] = useState({})
    
        const chart = () => {
          setChartData({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September'],
            datasets: [{
              label: 'Profit of the Month',
              data: [2300, 2350, 3120, 3945, 1550, 2590, 3106, 2590,1520],
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
                            <ProfitYear/>
                        </div>
                    </center>
                    
                    
                    <center><div style= {{
                        height: "800px", width: "800px"
                        
                    }}>

                    <Jumbotron className = "bg-light text-black">
                        <h2>Chart of Profit Year</h2><br/> <br/>
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

    export default ChartOfProfitYear;