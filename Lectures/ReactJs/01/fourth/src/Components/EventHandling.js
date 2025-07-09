import React from 'react'

function EventHandling() {
    
    const handleClick = () => {
        alert("Welcome ! You Clicked the button !");
    }
    
    return (
        <>
            <button onClick={handleClick}>Click !</button>
        </>
    )
}

export default EventHandling