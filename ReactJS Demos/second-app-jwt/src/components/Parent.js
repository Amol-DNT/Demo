import React, { Component } from 'react'
import Child from './Child'

//ES2015/ES6
// const Parent = () =>{
//     return  <h1>This is from Parent Component </h1>        
// }

// function Parent(){

//     var data = "Message from Parent"
//     var hdr = "This is from Parent Component"
//     var Hello = (msg) => {
//         alert(msg)
//         hdr = msg
//         alert(hdr)       
//     }  

//     return (
//         <div>
//             <h1>{hdr}</h1> 
//             <Child data={data} TalkToParentHandler={Hello} ></Child>
//         </div>        
//     )
// }

class Parent extends Component{        

    constructor() {

        super()
    
        this.state = {
             hdr:"This is from Parent Component" 
        }

        this.Hello = this.Hello.bind(this)
    }
    
    Hello(msg)  {

        //alert(this.state.hdr)  
        this.setState({hdr: msg} )                    
        //alert(this.state.hdr)       
    }  

    render(){
        this.data = "Message from Parent"         
        return (
                    <div>
                        <h1>{this.state.hdr}</h1> 
                        <Child data={this.data} TalkToParentHandler={this.Hello} ></Child>
                    </div>        
                )
    }
}

export default Parent