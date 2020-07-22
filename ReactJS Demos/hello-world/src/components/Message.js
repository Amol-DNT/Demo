import React, {Component} from 'react';

class Message extends Component{
    constructor(){
        super()        
        this.state = {
            msg: 'Welcome Visitor!'
        }
    }

    ChangeState(){
     //alert("Thanks for Clicking!")   
     this.setState({msg: 'Welcome Amol'})                    
    }

    render()
    {
    return <div>
        <h1>{this.state.msg}</h1>                
        <button onClick={() => this.ChangeState() }>Click Here to Update Message</button>
    </div>
    }
}

export default Message