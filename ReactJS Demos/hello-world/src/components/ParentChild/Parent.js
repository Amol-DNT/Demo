import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {

    GreetParent(from){
        alert(`Hello from ${from}`);
    }

    render() {
        return (
            <div>
                <Child GreetHandler={this.GreetParent}></Child>
            </div>
        )
    }
}

export default Parent
