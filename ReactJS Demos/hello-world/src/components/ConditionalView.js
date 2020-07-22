import React, { Component } from 'react'

class ConditionalView extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isUserAuthenticated: false
        }
    }
    

    render() {

        // var name = "Guest"
        // if ( this.state.isUserAuthenticated)
        // {
        //     name = "Amol";
        // }        
        // return (
        //     <div>
        //         Welcome {name}
        //     </div>                                    
        // )

        if ( this.state.isUserAuthenticated)
        {
            return (
                <div>
                    Welcome Amol
                </div>
            )
        }    
        else
        {
            return (
                <div>
                    Welcome Guest
                </div>
            )
        }    

    }
}
export default ConditionalView