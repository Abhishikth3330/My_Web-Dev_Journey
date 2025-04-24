// syntax
// class class_name{
//     // constructor_method
//     constructor (){
//         // code
//     }
// }


// LHS has private variable "this._name"
// RHS = parameters of the class

// class
class student1{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
}

// objects
const std1 = new student1("ABC", 21);
const std2 = new student1("XYZ", 24);
const std3 = new student1("PQRS", 30);


// display

// console.log(std1._name, std1._age);
// console.log(std2._name, std2._age);
// console.log(std3._name, std3._age);


// class
class Employee {
    constructor(name, department, salary, exp){
        this._name = name;
        this._department = department;
        this._salary = salary;
        this._exp = exp;
    }
}

// objects
const emp1 = new Employee("ABC", "Web_Dev", 10000, 1);
const emp2 = new Employee("XYZ", "Sales", 5000, 2);


// display

// console.log(emp1._name, emp1._department, emp1._salary, emp1._exp);
// console.log(emp2._name, emp2._department, emp2._salary, emp2._exp);


// using functions in place of classes to make objects
function Student(name, age){
    this._name = name;
    this._age = age;
}

const std5 =  new Student ("QWERTY", 24);
console.log(std5._name, std5._age);