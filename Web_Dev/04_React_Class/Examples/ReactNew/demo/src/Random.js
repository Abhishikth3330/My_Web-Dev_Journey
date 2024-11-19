function Random(){
    // generate a random number
    let number = Math.random() * 100;
    return<>
        {/* round the number */}
        <h1>The Random Number is {(Math.round(number))}</h1>    
    </>
}
export default Random;