import React, { useState } from 'react'

function LoginControlIfElse() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let message;
    let button;

    if (isLoggedIn) {
        message = <h2>Welcome to the Page !</h2>
        button = <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    }else {
        message = <h2>Please Login.</h2>
        button = <button onClick={() =>setIsLoggedIn(true)}>Logout</button>
    }
    
    return (
        <>
            {message}
            {button}
        </>
    )
}

export default LoginControlIfElse