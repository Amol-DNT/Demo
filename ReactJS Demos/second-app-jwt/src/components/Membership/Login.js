import React, { Component } from 'react'
//import Axios from 'axios'
import jquery from 'jquery'
export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            userName: '',
            password:'',
            jwt:''
        }

        this.SubmitHandler = this.SubmitHandler.bind(this)
    }
    
    onPasswordChanged =event => {
        console.log(event.target.value)
        this.setState({password: event.target.value})
    }

    onUserNameChanged =event => {
        console.log(event.target.value)
        this.setState({userName: event.target.value})
    }

    SubmitHandler = event => {
        event.preventDefault();       

        ////NOT WORKING
        // Axios.get('https://localhost:5001/api/login?username=a1&password=P@ssw0rd@a1') //+this.state.userName+'&Password='+this.state.password)  //'https://jsonplaceholder.typicode.com/posts')
        // .then(data => {
        //     alert( JSON.stringify(data))
        //     alert(data);
        //     alert("jwt: "+ data.tokenInfo);
        //     console.log("jwt: "+ data.tokenInfo);
        //     localStorage.setItem("jwt", data.tokenInfo);                            
        //      //this.setState({emps:resp.data});
        // })
        // .catch(err => {
        //     console.log(err)
        // })

        // alert(this.state.userName+" | "+ this.state.password)
        // console.log(this.state.userName+" | "+ this.state.password)
        // var data = {UserName: this.state.userName, Password: this.state.password};        
        // console.log(JSON.stringify( data))        
        // alert(JSON.stringify( data))


        ////NOT WORKING
        // jquery.ajax({
        //     type: 'post',
        //     url: 'https://localhost:5001/api/login', //?username=a1&password=P@ssw0rd@a1',
        //     contentType: 'application/json',
        //     data: JSON.stringify(data),
        //     success: (data) => {                   
        //         console.log(data)
        //         alert(data)
        //         this.setState({
        //             jwt:data                    
        //         })
        //     },             
        //     error: (error) => { console.log(JSON.stringify(error)); alert(JSON.stringify(error))} 
        // }); 

        //WORKING
        var data = {
            'UserName': this.state.userName,
            'Password': this.state.password                
        };
        jquery.ajax({                
            url: 'https://localhost:5001/api/login',
            type: 'post',              
            contentType: 'application/json',
            data: JSON.stringify(data) ,
            dataType:'json',
            success: function (resp) {
                console.log(resp.result)
                alert("resp: "+resp.result)                
                localStorage.setItem("jwt", resp.result);
                window.location.replace(window.location.protocol+"//"+window.location.hostname+ ":"+ window.location.port + "/Manage")                                                
            },
            error: function (xhr,status,error) {
                alert(xhr+" | "+ status +" | "+ error)
            }
        });          

        ////NOT WORKING
        // let axiosConfig = {
        //     headers: {
        //         'Content-Type': 'application/json;charset=UTF-8',
        //         "Access-Control-Allow-Origin": "*",
        //     }
        //   };
        // Axios.post('https://localhost:5001/api/login', data, axiosConfig) 
        // .then((resp) => {
        //     console.log(resp)
        //         alert(resp)
        //         this.setState({
        //             jwt:resp                    
        //         }, ()=> { alert("JWT Stored in State") })
        //     console.log("Entered in - Axios Post Then");                                      
        // })
        // .catch((err) => {
        //     alert(err)
        //     console.log(err)
        // })         
    }
    
    render() {
        var isError = true;
        //var ErrorMessgae = '';
        
        if(isError)
        {
            //ErrorMessgae = "Incorrect User-Name or Password!"
        }
        
        return (
            <form method="post">            
            <h5>Please sign in</h5>                            
            <input type="text" required value={this.state.userName} name="userName" onChange={this.onUserNameChanged} className="form-control" placeholder="User Name"/>                
            <input type="text" required value={this.state.password} name="password" onChange={this.onPasswordChanged} className="form-control" placeholder="Password"/>                                            
            <button type="submit" onClick={this.SubmitHandler} className="btn btn-info btn-block"> Login </button>                
        </form>                     

        //     <form className="form-signin"  onSubmit={this.SubmitHandler}>   
        //     <div className="card o-hidden border-0 shadow-lg my-5">
        //         <div className="card-body">        
        //             <div className="text-danger">
        //                 {ErrorMessgae}                        
        //             </div>
        //             <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        //             <div className="form-group">
        //                 <label htmlFor="UserName" className="sr-only">User Name</label>
        //                 <input type="text" className="form-control" id="UserName" placeholder="User Name" required autoFocus value={this.state.userName} onChange={this.onUserNameChanged}/>
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="Password" className="sr-only">Password</label>
        //                 <input type="password" id="Password" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.onPasswordChanged}/>
        //             </div>        
        //             <div className="checkbox mb-3">
        //             <label>
        //                 <input type="checkbox" value="remember-me"/> Remember me
        //             </label>
        //             </div>
        //             <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>    
        //             <div className="text-center">
        //                 <a className="small" href="singup">Forgot Password?</a>
        //             </div>
        //             <div className="text-center">
        //                 <a className="small" href="singUp">Create an Account!</a>
        //             </div>
        //         </div>
        //     </div>
        // </form>

        // <form onSubmit={}>
        //     <input type="text" onChange={this.onUserNameChanged} 
        // </form>
        )
    }
}

export default Login
