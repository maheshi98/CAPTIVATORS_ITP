import React, { useState, useEffect} from "react";
import './Style.css';
import {Line} from 'react-chartjs-2';
import { Jumbotron } from "react-bootstrap";
import ProfitMonth from './ProfitMonth';


    const ChartOfProfitMonth = () => {
        const [chartData, setChartData] = useState({})
    
        const chart = () => {
          setChartData({
            labels: ['1st Week', '2nd Week', '3rd Week', '4th Week'],
            datasets: [{
              label: 'Profit of the Week',
              data: [2300, 1550, 3106, 2590],
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
                            <ProfitMonth/>
                        </div>
                    </center>
                    
                    
                    <center><div style= {{
                        height: "800px", width: "800px"
                        
                    }}>

                    <Jumbotron className = "bg-light text-black">
                        <h2>Chart of Profit Month</h2><br/> <br/>
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

    export default ChartOfProfitMonth;
