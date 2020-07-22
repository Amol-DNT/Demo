import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Parent from './components/ParentChild/Parent';
import ConditionalView from './components/ConditionalView';
import ListEmployees from './components/Employees/ListEmployees';

function App() {
  return (
    <div className="App">

    
      {/* <Welcome/>
      <Greet/>    */}
    
      {/* <Hello FirstName="Amol" LastName="Patil">
        <span>This is the owner of the family</span>
      </Hello>
      <Hello FirstName="Akshada" LastName="Patil">
        <span>She is my elder daughter</span>
      </Hello>
      <Hello FirstName="Himani" LastName="Patil">
      <span>She is my younger daughter</span>
      </Hello> */}

      {/* <Welcome UserName="Amol Patil">
        <span>is the owner of the family</span>
      </Welcome>
      <Welcome UserName="Akshada Patil">
        <span>is my elder daughter</span>
      </Welcome>
      <Welcome UserName="Himani Patil">
      <span>is my younger daughter</span>
      </Welcome> */}

    {/* <Message msg='Hello from Amol'></Message> */}

    {/* <Counter></Counter> */}

    {/* <Parent></Parent> */}

    {/* <ConditionalView></ConditionalView> */}

   <ListEmployees></ListEmployees>
    
    </div>
  );
}

export default App;
