import React, {Component} from 'react';
import CostService from '../Services/CostService';
import {Row} from 'react-bootstrap';
import MyNavBar from './MyNavBar';

export default class ViewCost extends Component {

    constructor(props) {

        super(props)
        this.state = {    
            idCost: this.props.match.params.idCost,
            utilityCost: {}
        }
        this.backBtn = this.backBtn.bind(this);
    }

    componentDidMount() {
        CostService.getUtilityCostById(this.state.idCost).then( res => {
            this.setState({utilityCost: res.data});
        });
    }

    backBtn() {
        this.props.history.push('/costList');
    }

    render() {
        return(
            <div>
                <MyNavBar/> <br/><br/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div style={{ height: '500px', width: '650px', background: '#DDF9E4' }} className = " card"> <br/><br/>
                    <h2 className = "text-center">View Cost of the Utility Details</h2> <br/>
                    <div className = "card-body">

                        <Row style={{ marginLeft: '150px' }}>
                            <label><b>* Utility Name : </b></label> 
                            <div style={{ marginLeft: '20px' }}> <i>{ this.state.utilityCost.utilityName} </i></div> 
                        </Row><br/>

                        

                        <Row style={{ marginLeft: '150px' }}>
                            <label><b>* Year : </b></label> 
                            <div style={{ marginLeft: '20px' }}> <i>{ this.state.utilityCost.year} </i></div> 
                        </Row><br/>

                        <Row style={{ marginLeft: '150px' }}>   
                            <label><b>* Month  : </b></label>
                            <div style={{ marginLeft: '20px' }}><i> { this.state.utilityCost.month} </i></div>
                        </Row><br/>

                        <Row style={{ marginLeft: '150px' }}>   
                            <label><b>* Cost  : </b></label>
                            <div style={{ marginLeft: '20px' }}><i> Rs.  { this.state.utilityCost.cost} </i></div>
                        </Row><br/>

                        <Row style={{ marginLeft: '450px' }}>
                            <button style={{ width: '100px' }} className = "btn btn-info" onClick = {this.backBtn.bind(this)}>Back</button>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}