import React, { Component } from 'react'
import EmpDetails from './EmpDetails';
import Axios from 'axios';

// import DeleteEmployee from './DeleteEmployee';

export class TestApi extends Component {
    
    constructor(props) {

        super(props)
    
        this.state = {    
            emps: []
            }
        }

        componentDidMount() 
        {                                    
        let axiosConfig = {
            headers: {
                'Authorization':'bearer '+localStorage.getItem("jwt")                    
            }
            };
        Axios.get('https://localhost:5001/api/Employees',axiosConfig)  //'https://jsonplaceholder.typicode.com/posts')
        .then(resp => {
             //console.log(resp.data);                         
             this.setState({emps:resp.data});
        })
        .catch(err => {
            console.log(err)
        })

            //   this.setState({emps: [
            //     {
            //         id: 101, 
            //         name: 'Alex',
            //         dept: 'HR',
            //         salary: 3001
            //     },
            //     {
            //         id: 102, 
            //         name: 'David',
            //         dept: 'Operation',
            //         salary: 2901
            //     },
            //     {
            //         id: 103, 
            //         name: 'Amol',
            //         dept: 'Admin',
            //         salary: 2930
            //     }
            // ] }, () => { console.log(this.state.emps) } );            
        }         
      
    render() {
        return (
            <div>
                
                <h5>Manage Employees</h5>
                {/* {this.state.emps.map(e => <div>{e.id} | {e.name} | {e.dept} | {e.salary}</div> )} */}
                
                <table className="table table-striped table-bordered table-hover table-sm">       
                    <thead className="thead-dark">
                        <tr><td>Emp-Id</td><td>Emp-Name</td><td>Department-Name</td><td>Salary</td><td>Update/Delete</td></tr>
                    </thead>             
                    <tbody>
                        {this.state.emps.map(e => <EmpDetails key={e.id} emp={e}></EmpDetails> )} 
                    </tbody>                    
                </table>                
                <hr/>                         
            </div>
        )
    }
}

export default TestApi