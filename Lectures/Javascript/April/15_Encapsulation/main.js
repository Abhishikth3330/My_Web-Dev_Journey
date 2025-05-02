// encapsulation - setter and getter method
class A {
    constructor(name) {
        this._name = name // underscore means private
    }
    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
}

// const obj = new A("Abhi")
// console.log(obj.name)

// obj.name = "Riya"
// console.log(obj.name)



// example - 1
// Class A
class ClassA {
    #secret; // private property
    
    constructor () {
        this.#secret = "Hidden Info";
    }

    revealSecret() {
        return this.#secret;
    }
}
// class B
class ClassB {
    showSecret() {
        const a = new ClassA();
        console.log("ClassA says:", a.revealSecret()); // accessing through method
    }
}

// create object of ClassB and call the method
// const b = new ClassB();
// b.showSecret();


// Example - 2
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    details() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
// let student = new Student("Abhi", 22);
// student.details();


// Example - 3
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this._salary = salary;
    }

    get salary() {
        return this._salary;
    }
    set salary(newSalary) {
        this._salary = newSalary;
    }
}

const emp = new Employee("Abhi", "Developer", 10000);
console.log(`${emp.name} | ${emp.position} | ${emp.salary}`);
emp.salary = 20000;
console.log(`${emp.name} | ${emp.position} | ${emp.salary}`);