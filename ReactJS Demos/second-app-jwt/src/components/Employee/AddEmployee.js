import React, { Component } from 'react'
import Axios from 'axios'
import TestApi from './ManageEmployee'

export class AddEmployee extends Component {

constructor(props) {
    super(props)

    this.state = { 
         id: '',
         name:'',
         dept:'',
         salary:''
    }

    this.SubmitHandler = this.SubmitHandler.bind(this)
}

    SubmitHandler = event => {        
        var data = { Id: parseInt(this.state.id), Name: this.state.name, Dept: this.state.dept, Salary: parseInt( this.state.salary)} //not working        
        console.log(JSON.stringify(data))        
        let axiosConfig = {
            headers: {
                'Authorization':'bearer '+localStorage.getItem("jwt"),
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
        Axios.post('https://localhost:5001/api/Employees', data, axiosConfig) 
        .then((resp) => {
            console.log("Entered in - Axios Post Then");                                      
        })
        .catch((err) => {
            alert(err)
            console.log(err)
        })        
    }

    ChangeIdHandler = event =>{
        console.log(event.target.value)
        this.setState({id: parseInt(event.target.value)})
    }

    ChangeNameHandler = event =>{
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }

    ChangeDeptHandler = event =>{
        console.log(event.target.value)
        this.setState({dept:event.target.value})
    }

    ChangeSalaryHandler = event =>{
        console.log(event.target.value)
        this.setState({salary:parseInt(event.target.value)})
    }

    render() {
        return (            
            <div>            
                <form onSubmit={this.SubmitHandler}>            
                    <h5>Add New Employee</h5>                
                    <input type="number" required value={this.state.id} name="id" onChange={this.ChangeIdHandler} className="form-control" placeholder="Employee Id"/>                
                    <input type="text" required value={this.state.name} name="name" onChange={this.ChangeNameHandler} className="form-control" placeholder="Employee Name"/>                
                    <input type="text" required value={this.state.dept} name="depr" onChange={this.ChangeDeptHandler} className="form-control" placeholder="Department-Name"/>                                
                    <input type="number" required value={this.state.salary} name="salary" onChange={this.ChangeSalaryHandler} className="form-control" placeholder="Salary"/>                         
                    <button type="submit" className="btn btn-info btn-block"> Insert Employee </button>                
                </form>                     
                <TestApi></TestApi>
            </div>              
        )
    }
}

export default AddEmployee