import React, {Component} from 'react'

class Child extends Component{

    render(){
        return <div>
            <h2>This is from Child</h2>
            <h3>{this.props.data}</h3>
            <button onClick={() => { this.props.TalkToParentHandler("Thanks for Clicking") }}>Click Me</button>
        </div>                     
    }
}

export default Child