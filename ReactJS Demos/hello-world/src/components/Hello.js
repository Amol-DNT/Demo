import React from 'react'

const Hello = (props) => {
    
    console.log(props);
    // return <div>
    //         <h1>Hello Amol</h1>
    //     </div>    
    //return React.createElement("div", null, "Hello Amol");
    //return React.createElement("div", { id : "div1", className: "divClass" }, "Hello Amol");
    //return React.createElement("div", { id : "div1", className: "divClass" }, React.createElement("H1", null,  "Hello Amol" ));

    return <div>
        <h1>Hello {props.FirstName} {props.LastName}</h1>
        <h2>{props.children}</h2>
    </div>
} 

export default Hello