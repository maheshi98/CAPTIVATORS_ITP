import React, {Component} from 'react';
import UtilityService from '../Services/UtilityService';
//import {Link} from 'react-router-dom';
import jsPDF from 'jspdf';
import Utilitynavbar from './UtilityNavbar';
import MyNavBar from './MyNavBar';


class UtilityList extends Component {

    constructor(props) {

        super(props)
        this.state = {
            utility: [],
            

        };

        this.addUtility = this.addUtility.bind(this);
        this.editUtility = this.editUtility.bind(this);
        this.deleteUtility = this.deleteUtility.bind(this);
        this.viewUtility = this.viewUtility.bind(this);
    }

    componentDidMount() {
        UtilityService.getUtility().then((res) => {
            this.setState({ utility: res.data});
        });
    }

    addUtility() {
        
        this.props.history.push('/add/_add');
    }

    editUtility(ID) {
        
        this.props.history.push(`/add/${ID}`);
    }

    deleteUtility(ID) {
        alert("Delete is sucessfully!");
        
        UtilityService.deleteUtility(ID).then( res => {
            this.setState({utility: this.state.utility.filter(utility => utility.ID !== ID)}); 
            
            
            UtilityService.getUtility().then((res) => {
            this.setState({ utility: res.data});
        });
        });

    }

    viewUtility(ID){
        this.props.history.push(`/view-utility/${ID}`);
    }

    //Generate download the PDF 
    downloadUtility = () => {
        
        //create new document
        var doc = new jsPDF();
        doc.text(20,20, 'Uility List in Restaurant');

        //save the pdf document
        doc.save("UtilityList.pdf");

    }

    render() {
        return(
            <div>
            <MyNavBar/>

            <div style ={{marginTop:'3.5cm', width: '35cm'}}>
                
                <Utilitynavbar></Utilitynavbar>
                
                <br></br>
                <h3 className = "text-center">Utility List in Restaurant</h3><br/><br/>
                <div className = "row">
                        <button style = {{marginLeft: "150px"}} className = "btn btn-primary" onClick = {this.addUtility} > Add New Utility </button>  
                        <button id = "btnDownload" style = {{marginLeft: "20px"}} className = "btn btn-primary" onClick = {this.downloadUtility}> Download </button> 
                </div>
                
                <br/> 

                <div className = "row">
                    <center>
                    <table style = {{width: "950px", marginLeft: "150px"}} className = "table table-striped table-hover table-dark table-bordered "> 
                        <thead class="thead-dark">
                            <tr>
                            
                                <th className = "text-center">Name of the Utility</th>
                                <th className = "text-center">Utility Description</th>
                                <th className = "text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.utility.map(
                                    utility =>
                                    <tr key = {utility.iD}>
                                        
                                        <td> {utility.utilityName} </td>
                                        <td> {utility.description} </td>
                                        <td>
                                            <center>
                                                <button onClick = {() => this.editUtility(utility.id)} className = "btn btn-info">Update</button>
                                                <button style = {{marginLeft: "30px"}} onClick = {() => this.deleteUtility(utility.id)} className = "btn btn-danger">Delete</button>
                                                <button style = {{marginLeft: "30px"}} onClick = {() => this.viewUtility(utility.id)} className = "btn btn-info">View</button>
                                            </center>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                    </center>
                </div>
            </div>
            </div>
        );
    }
}

export default UtilityList;