import React, {Component} from 'react';
import UtilityService from '../Services/UtilityService';
import {Row} from 'react-bootstrap';
import MyNavBar from './MyNavBar';

export default class ViewUtility extends Component {

    constructor(props) {

        super(props)
        this.state = {
            ID: this.props.match.params.ID,
            utility: {} 
        }
        this.backBtn = this.backBtn.bind(this);
    }

    componentDidMount() {
        UtilityService.getUtilityById(this.state.ID).then( res => {
            this.setState({utility: res.data});
        });
    }

    backBtn() {
        this.props.history.push('/utilityList');
    }

    render() {
        return(
            <div>
                <MyNavBar></MyNavBar> <br/><br/>
                <div style={{ height: '350px', width: '600px', background: '#DDF9E4' }} className = " card"> <br/><br/>
                    <h2 className = "text-center">View Utility Details</h2> <br/>
                    <div className = "card-body">
                        <Row style={{ marginLeft: '20px' }}>
                            <label><b>* Utility Name : </b></label> 
                            <div style={{ marginLeft: '20px' }}> <i>{ this.state.utility.utilityName} </i></div> 
                        </Row><br/>

                        <Row style={{ marginLeft: '20px' }}>   
                            <label><b>* Description  : </b></label>
                            <div style={{ marginLeft: '20px' }}><i> { this.state.utility.description} </i></div>
                        </Row><br/>

                        <Row style={{ marginLeft: '400px' }}>
                            <button style={{ width: '100px' }} className = "btn btn-info" onClick = {this.backBtn.bind(this)}>Back</button>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}