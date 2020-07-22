import React, { Component } from 'react'
import EmployeeDetails from './EmployeeDetails'
import Axios from 'axios'

class ListEmployees extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             //emps : []
        }
    }
    
    // componentDidMount(){
    //     Axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(resp => {
    //         console.log(resp.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }
    render() {
        const names = ['Amol', 'David', 'Alex'] 
        const emps =  [
            {
                id: 101, 
                name: 'Alex',
                dept: 'HR',
                salary: 3001
            },
            {
                id: 102, 
                name: 'David',
                dept: 'Operation',
                salary: 2901
            },
            {
                id: 103, 
                name: 'Amol',
                dept: 'Admin',
                salary: 2930
            }
        ]

        return (

        // <div> {names.map( (n, ind) => <div key={ind}> {ind+1}) {n}</div>)} </div>

            <table border="1">
                <thead>
                    <tr>
                        <td>Emp-Id</td>
                        <td>Emp-Name</td>
                        <td>Department</td>
                        <td>Salary</td>         
                    </tr>
                </thead>
                <tbody>
                    {emps.map(e => 

                    // <tr key={e.id}>
                    //     <td>{e.id}</td>
                    //     <td>{e.name}</td>
                    //     <td>{e.dept}</td>
                    //     <td>{e.salary}</td> 
                    // </tr>    
                    
                    <EmployeeDetails key={e.id} emp={e}></EmployeeDetails>
                    
                )}
                </tbody>            
            </table>            
        )
    }
}

export default ListEmployees