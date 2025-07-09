import React from 'react'

function ChildButton(props) {
    return (
        <>
            <button onClick={props.onClick}>Change Message</button>
        </>
    )
}

export default ChildButton