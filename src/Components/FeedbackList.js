import React, { Component } from 'react'
import { Card, Table, ButtonGroup } from 'react-bootstrap';
import FeedbackService from '../service/FeedbackService';
import axios from 'axios';
import MyToast from './MyToast'

export default class Feedbacklist extends Component {
    constructor(props) {
        super(props)

        this.state = {

            feedback: []
        }

    }

    componentDidMount() {
        FeedbackService.getfeedback().then((res) => {
            this.setState({ feedback: res.data });
        });
    }

    deleteFeedback = (id) => {


        axios.delete("http://localhost:8080/api/v1/feedback/" + id, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => {
            this.setState({ feedback: this.state.feedback.filter(feedback => feedback.id !== id) })
            if(res.data != null){
            this.setState({"show":true});
            setTimeout(() => this.setState({"show" :false}) , 3000)
        }else{
            this.setState({"show" :false})
        }
            this.componentDidMount();
            
        })



    }

    render() {
        return (
            <div>
            <div style = {{"display" : this.state.show ? "block" :"none" }}>

                   <MyToast  children = {{show:this.state.show , message :"Delete successfully!" }}/>
                   </div> 
            <Card className={"border border-dark bg-dark text-white"} style={{ alignContent: 'center', width: '35cm' }}>
                <Card.Header> <h3 className="text-center">Customer Feedback</h3> </Card.Header>
                <Card.Body>
                    <Table hover striped variant="dark">
                        <thead>
                            <tr>
                                <th>Feedback</th>
                                <th>Date and Time</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.feedback.map(
                                    feedback =>
                                        <tr key={feedback.id}>
                                            <td> {feedback.feedback}</td>
                                            <td> {feedback.date}</td>
                                            <td>
                                                <ButtonGroup>
                                                <button className="btn btn-danger" onClick={() => {
                                                            this.deleteFeedback(feedback.id)
                                                        }}>
                                                        Delete
                                         </button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </Table>
                </Card.Body>
            </Card>
            </div>
        )
    }
}
