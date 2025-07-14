// 3. Write a React component that renders a UserCard component with the user's name and email passed as props.

import React from 'react'

function ThreeUserCard({ name, email }) {
    return (
        <>
            <div className='container mt-4'>
                <div className='card mx-auto text-center' style={{ width: "500px" }}>
                    <div className='card-body'>
                        <h5 className='card-title'>{name}</h5>
                        <p><b>Email : </b>{email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThreeUserCard