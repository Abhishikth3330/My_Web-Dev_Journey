import React, { useState } from 'react'

// syntax useState
// const [stateValue, setStateFunction] = useState(initialValue);


function UseStateHook() {
    const [count, setCount] = useState(0);
  
    return (
        <>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </>
  )
}

export default UseStateHook