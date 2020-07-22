import React from 'react'

function EmployeeDetails(props) {    
    var e = props.emp;
    return (                
        <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.dept}</td>
            <td>{e.salary}</td> 
        </tr>        
    )
}

export default EmployeeDetails
