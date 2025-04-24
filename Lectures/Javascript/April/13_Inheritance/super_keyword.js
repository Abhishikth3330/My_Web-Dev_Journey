class A{
    constructor(){
        console.log("This is class A");
    }
}

class B extends A{
    constructor(){
        super(); // calls constructor of class A
        console.log("This is class B");
    }
}
// const obj = new B();


// Example - 1
class Parent {
    sayHello(){
        console.log("Hello from Parent");
    }
}
class Child extends Parent{
    sayHello() {
        super.sayHello(); // call the method from Parent
        console.log("Hello from child");
    }
}
// const childObj = new Child();
// childObj.sayHello();



// Example - 2

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound`);        
    }
}
class Dog extends Animal {

    constructor (name, breed) {
        // Call the parent constructor using super
        super(name);
        this.breed = breed;
    }
    speak(){
        // Call the speak method from the parent class
        super.speak();
        console.log(`${this.name} barks`);
    }
}
const myDog = new Dog("Buddy", "Labrador");
myDog.speak();