// Class & Object

// 1. Create a simple Person class with properties name and age. Create an object of this class and print the values

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// const person1 = new Person("Abhi", 23);
// console.log("Name : ", person1.name);
// console.log("Age : ", person1.age);


// 2. Write a class Car with properties brand and model. Add a method displayDetails() to print car details.

// class Car {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }
//     displayDetails(){
//         console.log(`Brand : ${this.brand}`);
//         console.log(`Model : ${this.model}`);
//     }
// }
// const car1 = new Car("TVS", "Apache");
// car1.displayDetails();


// 3. Create a Student class with a constructor that takes name and grade. Instantiate two student objects and print their details

// class Student {
//     constructor(name, grade) {
//         this.name = name;
//         this.grade = grade;
//     }
//     displayDetails(){
//         console.log(`Name: ${this.name}`);
//         console.log(`Grade: ${this.grade}`);
//     }
// }
// const student1 = new Student("Abhi", 23);
// const student2 = new Student("Runali", 24);
// student1.displayDetails();
// console.log("------------------");
// student2.displayDetails()


// 4. Define a class Rectangle with properties width and height. Add a method to calculate the area of the rectangle

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     area() {
//         return `Area : ${this.height * this.width}`
//     }
// }
// const rectangle1 = new Rectangle(5, 10);
// console.log(rectangle1.area());


// 5. Write a JavaScript class Animal with a speak() method. Create an object and call the method

// class Animal {
//     speak(){
//         console.log("Animal speakssssss....");
//     }
// }
// const cat = new Animal();
// cat.speak();


// 6. Create a Car class with properties like brand, model, and year. Create 2 objects from this class and display their details

// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
//     display(){
//         console.log(`Brand: ${this.brand}`);
//         console.log(`Model: ${this.model}`);
//         console.log(`Year: ${this.year}`);
//     }
// }
// const car1 = new Car("Honda", "Civic", 2020);
// const bike1 = new Car("TVS", "Apache", 2022);
// car1.display();
// console.log("--------------");
// bike1.display();


// 7. Design a Book class with properties title, author, and pages. Add a method read() that logs "Reading {title} by {author}". Create a few book objects and call their methods

// class Book {
//     constructor (title, author, pages) {
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
//     }
//     read(){
//         console.log(`Reading ${this.title} by ${this.author}.`);
//     }
// }
// const book1 = new Book("You become what you think", "Shubham Kumar Singh", 186);
// const book2 = new Book("Can we ne strangers again", "Shrijeet Shandilya", 227);
// const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
// book1.read();
// book2.read();
// book3.read();


// 8. Build a Student class with properties name, age, and grade. Add a method getDetails() that returns all the student's information

// class Student{
//     constructor(name, age, grade){
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }
//     getDetails(){
//         console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
//     }
// }
// const student1 = new Student("Abhi", 24, "A");
// student1.getDetails();


// 9. Create a Pen class with properties brand, color, and type (gel/ballpoint). Add a method write() that logs a writing message.

// class Pen{
//     constructor(brand, color, type){
//         this.brand = brand;
//         this.color = color;
//         this.type = type;
//     }
//     write(){
//         console.log(`Writing with a ${this.color} ${this.type} pen by ${this.brand}`);
//     }
// }
// const pen1 = new Pen("Pilot", "blue", "gel");
// const pen2 = new Pen("Parker", "black", "dot");
// pen1.write();
// pen2.write();


// 10. Design a TV class with brand, size, and isSmart. Add methods to turnOn() and turnOff().

// class TV {
//     constructor(brand, size, isSmart){
//         this.brand = brand;
//         this.size = size;
//         this.isSmart = isSmart;
//     }
//     turnOn(){
//         console.log(`${this.brand} TV of ${this.size} size is ON`);
//     }
//     turnOff(){
//         console.log(`${this.brand} TV of ${this.size} size is OFF`);
//     }
// }
// const tv1 = new TV("Sony", 55, true);
// const tv2 = new TV("Samsung", 48, false);
// tv1.turnOn();
// tv2.turnOff();


// 11. Create a Pet class with name, species, and age. Add a method makeSound() that logs different sounds based on species.

// class Pet{
//     constructor(name, species, age){
//         this.name = name;
//         this.species = species;
//         this.age = age;
//     }
//     makeSound() {
//         if (this.species === "dog") {
//             console.log(`${this.name} barks!`);
//         }else if (this.species === "cat") {
//             console.log(`${this.name} meoww!`);
//         }else if (this.species === "bird") {
//             console.log(`${this.name} chirps!`);
//         }else {
//             console.log(`${this.name} makes a sound`);
//         }
//     }
// }
// const pet1 = new Pet("Tommy", "dog", 3);
// const pet2 = new Pet("Kitty", "cat", 2);
// const pet3 = new Pet("Tweety", "bird", 1);
// pet1.makeSound();
// pet2.makeSound();
// pet3.makeSound();


// 12. Make a Recipe class with name, ingredients, and cookTime. Add a method displayRecipe()

// class Recipe {
//     constructor(name, ingredients, cookTime) {
//         this.name = name;
//         this.ingredients = ingredients;
//         this.cookTime = cookTime
//     }
//     display() {
//         console.log(`Recipe: ${this.name}`);
//         console.log(`Ingredients: `);
//         this.ingredients.forEach(ingredients => {
//             console.log(`- ${ingredients}`);
//         });
//         console.log(`Cook Time: ${this.cookTime} minutes`);
//     }
// }
// const recipe1 = new Recipe("Pasta", ["Pasta", "Tomato Sauce", "Cheese", "Garlic"], 20);
// recipe1.display();