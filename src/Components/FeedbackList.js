import React, { Component } from 'react'
import {Card , Table , ButtonGroup} from 'react-bootstrap';
import FeedbackService from '../service/FeedbackService';
import axios from 'axios';

export default class Feedbacklist extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
            
                 feedback :[]
        }

    }

    componentDidMount() {
        FeedbackService.getfeedback().then((res)=>{
            this.setState({feedback : res.data});
       });
    }

    
    render() {
        return (
            <Card className = {"border border-light bg-light text-black"}style={{ alignContent:'center', width:'35cm'}}>
                 <Card.Header> <h3 className = "text-center">Customer Feedback</h3> </Card.Header> 
                <Card.Body>
                 <Table boardered hover striped variant = "grey">
                     <thead>
                         <tr>
                             <th>Feedback</th>
                             <th>Action</th>
                             
                         </tr>
                     </thead>
                     <tbody>
                         <tr align = "center">
                             <td colSpan = "10">No List Available </td>
                             {
                                 this.state.feedback.map(
                                     feedback =>
                                     <tr key = {feedback.id}>
                                         <td> {feedback.feedback}</td>
                                         <td>
                                         <ButtonGroup>
                                         <button  className ="btn btn-danger">
                                          Delete
                                         </button>
                                     </ButtonGroup>
                                         </td>
                                          </tr>
                                 )
                             }
                         </tr>
                     </tbody>

                 </Table>
             </Card.Body>
            </Card>
        )
    }
}
