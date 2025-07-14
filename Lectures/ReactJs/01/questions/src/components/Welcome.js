// 1. Create a functional component called Welcome that receives a name prop and displays it inside an <h1> tag.

import React from 'react'

function Welcome({ name }) {
    return (
        <>
            <h1>Welcome, { name } !</h1>
        </>   
    )
}

export default Welcome