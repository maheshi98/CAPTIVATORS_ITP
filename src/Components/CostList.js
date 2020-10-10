import React, {Component} from 'react';
import CostService from '../Services/CostService';
import UtilityService from '../Services/UtilityService';
import Utilitynavbar from './UtilityNavbar';
import MyNavBar from './MyNavBar';


class CostList extends Component {

    constructor(props) {
        super(props)
       
        this.state = {
            utilityCost: [],
            utility: [],
            utilityName: '',
            description: '',
            ID:0

        }

        this.addUtilityCost = this.addUtilityCost.bind(this);
        this.editUtilityCost = this.editUtilityCost.bind(this);
        this.deleteUtilityCost = this.deleteUtilityCost.bind(this);
        this.viewUtilityCost = this.viewUtilityCost.bind(this);
       // this.getUtility = this.getUtility.bind(this);
    }

    componentDidMount(){

        CostService.getUtilityCost().then(res => {
            this.setState({ utilityCost: res.data});
          /*  this.state.utilityCost.map(
                utilitycost =>
               // this.setState({ID: utilitycost.id}),
                this.getUtility(utilitycost.id)
            )
         // console.log(this.state.ID)
           UtilityService.getUtilityById(this.state.ID).then( (res) =>{
            this.setState({ utility : res.data });   
            let utility = res.data;
                this.setState({utilityName: utility.utilityName, 
                    description: utility.description});
        });*/
           
        });
  
    }

 /*   getUtility(id)
    {
       console.log(id);
        UtilityService.getUtilityById(id).then( (res) =>{
            let utility = res.data;
            this.setState({utilityName: utility.utilityName, 
                description: utility.description});
          
        });
    
    }*/

    addUtilityCost() {
        this.props.history.push('/add-cost/_cost');
    }

    editUtilityCost(idCost) {
        this.props.history.push(`/add-cost/${idCost}`);
    }

    deleteUtilityCost(idCost) {

        alert("Delete is sucessfully!");
        CostService.deleteUtilityCost(idCost).then( res => {
            this.setState({ utilityCost: this.state.utilityCost.filter(utilityCost => utilityCost.idCost !== idCost)});

            CostService.getUtilityCost().then(res => {
                this.setState({ utilityCost: res.data});
            });

        });
    }

    viewUtilityCost(idCost) {
        this.props.history.push(`/view-cost/${idCost}`);
    }

    
    render() {
        return(
            
            <div>
                <MyNavBar></MyNavBar>
      <div style = {{width : '32cm'}}>
          <Utilitynavbar></Utilitynavbar></div>
      <br/>
                <br/>
                <h1 className = "text-center">Cost of the Utility List</h1><br/><br/>
                <div className = "row">
                        <button style = {{marginLeft: "150px"}} className = "btn btn-primary" onClick = {this.addUtilityCost} > Insert Cost </button>
                        <button style = {{marginLeft: "20px"}} className = "btn btn-primary" > Download </button>  
                </div>
                
                <br/> 


                

                <div className = "row">
                    <center>
                    <table style = {{width: "900px", marginLeft: "150px"}} className = "table table-striped table-hover table-dark table-bordered "> 
                        <thead class="thead-dark">
                            <tr>
                                
                            <th className = "text-center">Name</th>
                                <th className = "text-center">Year</th>
                                <th className = "text-center">Month</th>
                                <th className = "text-center">Cost (Rs)</th>
                                <th className = "text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                 
                          this.state.utilityCost.map(
                                    utilitycost =>

                                    <tr key = {utilitycost.idCost} >
                                       <td> {utilitycost.utilityName} </td>                  
                                        <td> {utilitycost.year} </td>
                                        <td> {utilitycost.month} </td>
                                        <td> {utilitycost.cost} </td>
                                        <td>
                                            <center><button onClick = { () => this.editUtilityCost(utilitycost.idCost)} className = "btn btn-info"> Update</button>
                                            <button onClick = { () => this.deleteUtilityCost(utilitycost.idCost)} style = {{marginLeft: "15px"}} className = "btn btn-danger"> Delete</button>
                                            <button onClick = { () => this.viewUtilityCost(utilitycost.idCost)} style = {{marginLeft: "15px"}} className = "btn btn-info"> View</button>
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
        );
    }
}

export default CostList;