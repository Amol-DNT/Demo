import React, { Component } from 'react'
export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }

        this.IncrementNTimes = this.IncrementNTimes.bind(this)
    }
    
    Increment(){
        //this.setState({count: this.state.count+ 1 })
        //console.log(this.state.count)

        //this.setState({count: this.state.count+ 1 }, () => { console.log(this.state.count) })

        this.setState( (latestState) => ({ count: latestState.count + 1  }) , () => { console.log(this.state.count) })
    }

    // IncrementNTimes()
    // {
    //     this.Increment();
    //     this.Increment();
    //     this.Increment();
    //     this.Increment();
    //     this.Increment();
    // }

    IncrementNTimes = () =>
    {
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
    }

    render() {
        return (
            <div>
                {/* <button onClick={ () => this.IncrementNTimes() }>Button Click Count: {this.state.count}</button>                 */}
                {/* <button onClick={  this.IncrementNTimes.bind(this) }>Button Click Count: {this.state.count}</button>                 */}
                {/* <button onClick={  this.IncrementNTimes }>Button Click Count: {this.state.count}</button>                 */}
                <button onClick={  this.IncrementNTimes }>Button Click Count: {this.state.count}</button> 
            </div>
        )
    }
}
export default Counter