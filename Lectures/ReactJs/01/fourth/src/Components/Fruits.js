import React from 'react'
import { Component } from 'react'
// props - properties

function Fruits(props) {
  return (

    <>
    
        {/* single props */}
        <h2>Fruits Name is : {props.name}</h2>

        {/* Multiple props */}
        <h2>Fruits Name is: {props.name} and it is Famous in {props.city}</h2>

    </>


  )
}

export default Fruits