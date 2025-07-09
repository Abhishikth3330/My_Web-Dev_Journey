import React, { useState } from 'react'

function FormSubmit() {

    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hello, ${name}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter your name : '
                ></input>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default FormSubmit