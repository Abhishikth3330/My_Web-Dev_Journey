import React, { useState } from 'react'

function LoginControl() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);
    

    return (
        <>
            <h2>{isLoggedIn ? 'Welcome' : 'Please Login'}</h2>
            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
            
        </>
    )
}

export default LoginControl