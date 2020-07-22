import React, { Component } from 'react'
import jquery from 'jquery'

export class UpdateEmployee extends Component {

    constructor(props) {    
        super(props)
        
        this.state = {
            id: '',
            name:'',
            dept:'',
            salary:''
        }
    }

    componentDidMount()
    {        
        var id = this.props.location.pathname.toString().split('/')[2];        

        var name = this.props.location.pathname.toString().split('/')[3];
        var dept = this.props.location.pathname.toString().split('/')[4];
        var salary = this.props.location.pathname.toString().split('/')[5];           
        this.setState({id: id, name:name, dept:dept, salary:salary }, 
            ()=>{
                console.log(this.state.id + " | "+ this.state.name + " | "+ this.state.dept + " | " + this.state.salary)
            }
        )        

        // Axios.get('https://localhost:44383/api/Employees/'+id) 
        // .then(data => {
        //     //console.log(resp.data);                         
        //     this.setState({
        //         id:id,
        //         name:data.name,
        //         dept:data.dept,
        //         salary:data.salary                
        //      });
        // })
        // .catch(err => {
        //     console.log(err)
        // })        

        // jquery.ajax({
        //     type: 'get',
        //     url: 'https://localhost:44383/api/Employees/'+id,                        
        //     success: (data) => {   
        //         console.log(data)
        //               this.setState({
        //                   id:id,
        //          name:data.name,
        //          dept:data.dept,
        //          salary:data.salary                
        //      })},             
        //     error: (error) => { alert(JSON.stringify(error))} 
        // }); 
        
        
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
        this.setState({salary: parseInt(event.target.value)})
    }

    UpdateHandler = event => {        

        var data = { 'Id': parseInt(this.state.id), 'Name': this.state.name, 'Dept': this.state.dept, 'Salary': parseInt( this.state.salary)}
        var strJson = JSON.stringify(data);        
        console.log(strJson)        
        
        // Axios.put('https://localhost:44383/api/Employees', strJson) 
        // .then((resp) => {
        //     alert("Entered in - Axios Put Then");                                      
        // })
        // .catch((err) => {
        //     alert(err)
        //     console.log(err)
        // })            

        jquery.ajax({
            type: 'put',
            url: 'https://localhost:44383/api/Employees',
            contentType: 'application/json;charset=UTF-8',
            headers: {'Authorization':'bearer '+localStorage.getItem("jwt") },
            data: strJson,
            success: () => { alert('Employee Updated Successfully!'); window.location.reload(); } ,
            error: (error) => { alert(JSON.stringify("Erro: "+error.responseText))} 
        }); 
        
    }
    
    render() {
        return (
            <form>
            <div>
                <h5>Update Employee</h5>                
                <input type="number" readOnly value={this.state.id} name="id" className="form-control"/>                
                <input type="text" required value={this.state.name} name="name" onChange={this.ChangeNameHandler} className="form-control" placeholder="Employee Name"/>                
                <input type="text" required value={this.state.dept} name="dept" onChange={this.ChangeDeptHandler} className="form-control" placeholder="Department-Name"/>                                
                <input type="number" required value={this.state.salary} name="salary" onChange={this.ChangeSalaryHandler} className="form-control" placeholder="Salary"/>                         
                <button type="button" onClick={this.UpdateHandler} className="btn btn-info btn-block">Update Employee</button>
                </div>
            </form>                                    
        )
    }
}

export default UpdateEmployee