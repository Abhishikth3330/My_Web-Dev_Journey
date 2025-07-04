function Datatype() {

    var name = "Abhi"

    function Salary() {
        return 30000;
    }

    return (
        <>
            <p>My name is {name}</p>
            <p>My Salary is {Salary()}</p>
        </>
    );
}
export default Datatype;