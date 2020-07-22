import React, { Component } from 'react'
import Axios from 'axios'

export class EmpDetails extends Component {
    
    Delete(id)
    {                
        if (window.confirm('Are you sure to DELETE Employee with Id: '+id+'?')) 
        {
            let axiosConfig = {
                headers: {
                    'Authorization':'bearer '+localStorage.getItem("jwt")                   
                }
              };

            Axios.delete('https://localhost:5001/api/Employees?id='+id, axiosConfig) 
            .then((resp) => {
                console.log("Entered in - Axios Delete Then");                                       
                window.location.reload();                                
            })
            .catch((err) => {
                alert(err)
                console.log(err)
            })            
        }        
    }

    Update(emp)
    {                                                        
        window.location.replace(window.location.protocol+"//"+window.location.hostname+ ":"+ window.location.port + "/update/"+emp.id+"/"+emp.name+"/"+emp.dept+"/"+emp.salary)                                
        //window.location.replace(window.location.protocol+"//"+window.location.hostname+ ":"+ window.location.port + "/update/"+id)            
    }

    render() {
        var e = this.props.emp;
        return (
            <tr><td>{e.id}</td><td>{e.name}</td><td>{e.dept}</td><td>{e.salary}</td><td><button className="btn-danger" onClick={()=>{this.Delete(e.id)}}>Delete</button> <button className="btn-warning" onClick={()=>{this.Update(e)}}>Update</button></td></tr> 
        )
    }
}

export default EmpDetails