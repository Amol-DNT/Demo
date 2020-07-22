import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={() => props.GreetHandler('Child-1')}>Greet Parent</button>
        </div>
    )
}

export default Child