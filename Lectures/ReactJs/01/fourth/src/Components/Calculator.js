import React from 'react'
import Datatype from './Datatype';

const Calculator = () => {
    
    const a = 10;
    const b = 20;
    


    let x = 100;
    let y = 200;
    let temp;


    temp = x;
    x = y;
    y = temp;


    let p = 33;
    let q = 77;
    p = p + q;
    q = p - q;
    p = p - q;


    return (
    <>
        <div><h2><b>Welcome to JS</b></h2></div>
        <hr></hr>
        <p>a = {a} and b = {b}</p>
        <p>Addition : {b + a}</p>
        <p>Subtraction : {b - a}</p>
        <p>Multiplication : {b * a}</p>
        <p>Division : {b / a}</p>
        <p>Modulus : {b % a}</p>

        
        <hr></hr>


        <h3>Swapping of 2 numbers using a temp variable : </h3>
        <p>x = {x} and y = {y}</p>
        
        <h3>Swapping of 2 numbers using without a variable : </h3>
        <p>p = {p} and q = {q}</p>


        <Datatype/>

    </>
  )
}

export default Calculator;