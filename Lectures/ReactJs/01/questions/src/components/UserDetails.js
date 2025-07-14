// 2. Pass multiple props (name, age, city) from a parent component to a child component and display them.

import React from 'react'

function UserDetails({ name, age, city }) {
    return (
        <>
            <h2>User Details</h2>
            <p><b>Name : </b> {name}</p>
            <p><b>Age : </b> {age}</p>
            <p><b>City : </b> {city}</p>
        </>
    )
}

export default UserDetails