import React from 'react'

function StudentNames() {

    let student = ["ABC", "DEF", "GHI", "JKL", "MNO"];

    return (
        <>
            <h2>Student List : </h2>
            
            <ul>
                {student.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            
            {/* <ul>
                {student.map((std) => <li>{std}</li>)}
            </ul> */}
        </>
    )
}

export default StudentNames