import React, { useState } from 'react'

function HandlingInput() {

    const [text, setText] = useState("");
    
    const handleClick = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <input type='text' onChange={handleClick}></input>
            <p>Type : {text}</p>
        </>   
    )
}

export default HandlingInput