// method in an object
const person = {
    firstname : "ABC",
    lastname : "XYZ",
    age : 30,
    name : function(){
        // return this.firstname;
        return this.lastname;
    }
}

console.log(person.name());