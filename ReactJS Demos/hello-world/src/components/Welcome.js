// const { Component } = require("react")
import React, { Component} from 'react'

class Welcome extends Component
{
    render(){
        return <div>
                <h1>Welcome from Class Component!</h1>
                <b>{this.props.UserName}</b> {this.props.children}
            </div>
    }
}

export default Welcome