import React from 'react';
import './App.css';
import TestApi from './components/Employee/ManageEmployee';
import { BrowserRouter as Router, Route,  } from 'react-router-dom'
//import AddEmployee from './TestApi/AddEmployee';
import AddEmployee from './components/Employee/AddEmployee'
import UpdateEmployee from './components/Employee/UpdateEmployee';
import Login from './components/Membership/Login';
import Register from './components/Membership/Register'

function App() {
  return (
    <div className="App">
    {/* <Parent></Parent> */}
    <hr/>
                <h3>
                    Employee Management System
                </h3>                                
                <h5> <a href="/Membership/Login">Login</a> | <a href="/Membership/Register">Register User</a> | <a href="/Add">Add New Employee</a> | <a href="/Manage">Manage Existing Employees</a></h5>                                
                
                <hr/>
                
                <div>
                    <Router>
                        {/* <Route path='/' component={TestApi}/>*/}
                        <Route path='/Membership/Login' component={Login}/>
                        <Route path='/Membership/Register' component={Register}/>
                        <Route path='/Add' component={AddEmployee}/>
                        <Route path='/Update' component={UpdateEmployee}/>
                        <Route path='/Manage' component={TestApi}/>
                        {/* <Route path='/Delete' component={DeleteEmployee}/>                     */}
                    </Router>
                </div>                
                
                <hr/>    

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
