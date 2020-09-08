import React from 'react'
import {Card , Table , Button , Form} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import FeedbackService from '../service/FeedbackService';
class  Feedback extends React.Component{


    constructor(props){
        super(props)
         this.onChangefeedback =  this.onChangefeedback.bind(this);
         this.savefeedback = this.savefeedback.bind(this);
         this.state = {feedback:''}
         this.state ={
             feedback :""
         }
         
    }

    savefeedback= (event)=>{
        event.preventDefault()
        let feedback = {feedback :this.state.feedback}
        console.log('feedback =>' + JSON.stringify(feedback));

        FeedbackService.createfeedback(feedback).then(res => {
            this.props.history.push("/orderdet")
        });

    }

    onChangefeedback = (event)=>{
        this.setState({feedback : event.target.value});
    }

    
    render(){
        return(
        
            <Form >
              <Form.Row>
                 <Form.Group controlId = "feedback">
                     <Form.Label className= "feedback">Send Us your Feedback...!</Form.Label>
                     <Form.Control required
                     type="text" placeholder="give us your feedback"  onChange  ={this.onChangefeedback} value={this.state.feedback}/>
                     </Form.Group>
                     <Button variant="primary" type="submit" size = "lg" onClick ={this.savefeedback}>
                              <br/> Send
                    </Button>
                        </Form.Row>
                        </Form>
                        
           
        )
    }
}
export default Feedback;