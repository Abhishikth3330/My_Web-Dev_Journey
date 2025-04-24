// single level inheritance
class A{
    Sap(){
        console.log("Inside class A");
    }
}

// const obj = new A();
// obj.Sap()

class B extends A{
    Sap2(){
        console.log("Inside class B");
    }
}
// const obj = new B();
// obj.Sap()
// obj.Sap2();


// multi level inheritance
class C extends A{
    Sap3(){
        console.log("Inside class C");        
    }
}

// const obj = new C();
// obj.Sap();
// obj.Sap3();



// Example - 1

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound`);        
    }
}
class Dog extends Animal {
    speak(){
        console.log(`${this.name} barks`);
    }
}
// let pet = new Dog("Tommy");
// pet.speak()



// Example - 2
class Company {
    constructor(id){
        this.id = 123;
    }
    display(){
        console.log(`${this.id} company id`);
    }
}

class Employee extends Company {
    constructor(name, age, department)
    {
        super();
        this._name = name;
        this._age = age;
        this._department = department;
    }
    display_emp(){
        console.log(`${this._name} aged : ${this._age} is from ${this._department}. `);
        
    }
}
// const emp1 = new Employee("ABC", 21, "DATA");
// emp1.display();
// emp1.display_emp();


// Example - 3
class Vehicle {
    constructor(type) {
        this.type = type;
    }
    info(){
        console.log(`Type: ${this.type}`);
    }
}

class Bike extends Vehicle {
    constructor(type, brand) {
        super(type); // calls the parent constructor
        this.brand = brand;
    }
    details(){
        console.log(`Bike Brand: ${this.brand}`);
        this.info();
    }
}

const myBike = new Bike("Two-wheeler", "Yamaha");
myBike.details();