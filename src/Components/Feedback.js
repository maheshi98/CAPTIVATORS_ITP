import React from 'react'
import { Button , Form} from 'react-bootstrap';
// import {Link} from 'react-router-dom'
import FeedbackService from '../service/FeedbackService';
class  Feedback extends React.Component{


    constructor(props){
        super(props)
         this.onChangefeedback =  this.onChangefeedback.bind(this);
         this.onChangedate =  this.onChangedate.bind(this);
         this.savefeedback = this.savefeedback.bind(this);
         this.state ={
             errors: {},
             feedback :"",
             dateTime : this.formatDate(new Date()),
         }
         
    }

     formatDate(date_ob) {
      
        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2);
        
        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        
        // current year
        let year = date_ob.getFullYear();
        
        // current hours
        let hours = date_ob.getHours();
        
        // current minutes
        let minutes = date_ob.getMinutes();
        
        // current seconds
        let seconds = date_ob.getSeconds();
        
        return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    }
    savefeedback= (event)=>{
        event.preventDefault()
        if(this.validate()){
        let feedback = {feedback :this.state.feedback , date: this.formatDate(new Date())}
        console.log('feedback =>' + JSON.stringify(feedback));

        FeedbackService.createfeedback(feedback).then(res => {
            
        });
    }
    }

    onChangefeedback = (event)=>{
        this.setState({feedback : event.target.value});
    }

    onChangedate = (event)=>{
        this.setState({date : event.target.value});
    }
    validate(){

        let errors = {};
        let isValid = true;

        if (!this.state.feedback) {  
            isValid = false;
            errors["feedback"] = "please will out the feilds.";
          }
          this.setState({
            errors: errors
          });
          return isValid;
    }

    
    render(){
        return(
        
            <Form >
              <Form.Row>
                 <Form.Group controlId = "feedback">
                     <Form.Label className= "feedback">Send Us your Feedback...!</Form.Label>
                     <Form.Control required
                     type="text" placeholder="give us your feedback"  onChange  ={this.onChangefeedback} value={this.state.feedback} />
                     <div className="text-danger">{this.state.errors.feedback}</div>
                     </Form.Group>
                     <Button variant="primary" type="submit" size="small" onChange  ={this.onChangedate} onClick ={this.savefeedback} style={{marginLeft: '1cm'}}value= {this.state.dateTime}>
                              <br/> <p>submit your feedback</p>
                    </Button>
                    
                        </Form.Row>
                        </Form>
                        
           
        )
    }
}
export default Feedback;