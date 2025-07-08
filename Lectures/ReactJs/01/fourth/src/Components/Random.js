function Random() {
    
    const number = Math.floor(Math.random()*100);

    return(
        <>
            <p>Random Number : {number}</p>
        </>
    );
}
export default Random;