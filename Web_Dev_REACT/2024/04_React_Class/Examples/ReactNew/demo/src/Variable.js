function Variable(){
    // this will be outside the return part
    let Name = "Abhi"

    //  let us not use a fucntion as a placeholder
    function Salary(){
        return 5000 + "$"
    }

    return<>
        <h1>My name is {Name}, with a placeholder Variable</h1>
        <h2>This is a Normal H2 type heading without a placeholder</h2>
        <h1>My Salary is {Salary()}, with a placeholder fucntion</h1>
    </>
}
export default Variable