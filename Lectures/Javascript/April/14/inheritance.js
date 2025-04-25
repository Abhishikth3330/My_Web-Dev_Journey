// multi-level inheritance


// Example - 1: GrandParent -> Parent -> Child
class GrandParent {
    constructor(grandParentProperty) {
        this.grandParentProperty = grandParentProperty;
    }

    getGrandParentProperty() {
        console.log("I am Grandparent.");
    }
}

class Parent extends GrandParent {
    constructor(grandParentProperty, parentProperty) {
        super(grandParentProperty);
        this.parentProperty = parentProperty;
    }

    getParent() {
        console.log("I am Parent");
    }
}

class Child extends Parent {
    constructor(grandParentProperty, parentProperty, childProperty) {
        super(grandParentProperty, parentProperty);
        this.childProperty = childProperty;
    }

    getChild() {
        console.log("I am Child");
    }
}

// const child = new Child("grandParent", "parent", "child");
// child.getGrandParentProperty();
// child.getParent();
// child.getChild();


// Example - 2: Animal -> Mammal -> Dog
class Animal {
    constructor (name) {
        this.name = name;
    }
    eat(){
        return `${this.name} eats`;
    }
}

class Mammal extends Animal {
    constructor (name, color){
        super(name);
        this.color = color;
    }
    born() {
        return `${this.color} gives birth`;
    }
}

class Dog extends Mammal{
    constructor (name, color, barks){
        super(name, color);
        this.barks = barks;
    }
    ABC(){
        console.log(`${this.barks} barks`);
    }
}

// const obj = new Dog("Animal", "Orange", "Tommy");
// console.log(obj.eat());
// console.log(obj.born());
// obj.ABC();



// Example - 3: College -> Department -> Student
class College {
    constructor(name){
        this.name = name;
    }
    collegeName(){
        console.log(`Name of College : ${this.name}`);      
    }
}

class Department extends College {
    constructor(name, dept_name){
        super(name);
        this.dept_name = dept_name;
    }
    departmentName() {
        console.log(`Department Name : ${this.dept_name}`);
    }
}

class Student extends Department{
    constructor (name, dept_name, std_name){
        super(name, dept_name);
        this.std_name = std_name;
    }
    studentName(){
        console.log(`Student Name : ${this.std_name}`);
    }
}

// const obj = new Student("GHRCE", "AI", "Abhi");
// obj.collegeName();
// obj.studentName();
// obj.departmentName();



// Example - 4 : Company -> Section -> Domain
class Company {
    constructor(name){
        this.name = name;
    }
    companyName(){
        console.log(`Company Name : ${this.name}`);      
    }
}

class Section extends Company {
    constructor(name, dept_name){
        super(name);
        this.dept_name = dept_name;
    }
    sectionName() {
        console.log(`Section Name : ${this.dept_name}`);
    }
}

class Domain extends Section{
    constructor (name, dept_name, std_name){
        super(name, dept_name);
        this.std_name = std_name;
    }
    domainName(){
        console.log(`Domain Name : ${this.std_name}`);
    }
}

const obj = new Domain("IT_NetworkZ", "Technical", "Web_Dev");
obj.companyName();
obj.sectionName();
obj.domainName();