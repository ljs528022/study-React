import React from "react"

function Child({active, onClick}) {
    console.log('Child Rendered')

    return (
        <>
            <p>Child: {
                active ? 'Active' : 'Not Active'
            }</p>
            <button onClick={onClick}>Increase</button>
        </>
    )
} 

export default React.memo(Child)