// static method belongs to the class itself, not to the instance (objects) of the class
// static methods and properties belong to the class itself, not to instances
// you call it using the class name, not with an object.

// Example - 1
// class Math {
//     add (a, b){
//         return a + b;
//     }
// }
// const obj = new Math();
// console.log(obj.add(5, 3));


class Math {
    static add(a, b){
        return a + b;
    }
}
// console.log(Math.add(5, 3));


// Example - 2
class A {
    static sayHello() {
        console.log("Hello from static method");
    }
}
// A.sayHello(); // call the static method using class name;


// Example - 3 {static vs normal instance}
class Person {
    static greet(){
        console.log("Hello from static method");
    }
    sayHi(){
        console.log("Hi from instance method");
    }
}

// Person.greet();
// const p = new Person();
// p.sayHi();
// p.greet(); this will give error, because static method is used with an object not a class


// static method calling another method
// static - direct class.methiod

// class Calculator {
//     static square(n){
//         return n * n;
//     }
//     static cube(n){
//         return n * Calculator.square(n);
//     }
// }
// console.log(Calculator.cube(3));
// console.log(Calculator.square(3));


// using static in real-life utility class
class DataHelper {
    static getCurrentYear() {
        const now = new Date();
        return now.getFullYear();
    }
}
console.log("Year : ", DataHelper.getCurrentYear());