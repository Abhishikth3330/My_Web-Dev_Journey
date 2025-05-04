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




// Encapsulation


// 1. Create a BankAccount class with accountNumber and a private property balance. Add methods deposit(), withdraw(), and checkBalance().

// class BankAccount {
//     constructor(accountNumber, initialBalance) {
//         this.accountNumber = accountNumber;
//         this.#balance = initialBalance;
//     }
//     #balance;
//     deposite(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`Depositeed ${amount}`);
//         }else {
//             console.log(`Deposite amount must be positive`);
//         }
//     }
//     withdraw(amount) {
//         if (amount <= this.#balance){
//             this.#balance -= amount;
//             console.log(`Withdraw ${amount}`);
//         }else {
//             console.log(`Insufficient Balance`);
//         }
//     }
//     checkBalance() {
//         console.log(`Current Balance : ${this.#balance}`);
//     }
// }
// const account = new BankAccount("ABCD1234", 500);
// account.deposite(200);
// account.checkBalance();
// account.withdraw(100);
// account.checkBalance();


// 2. Implement a PasswordManager class where the password is private. Provide methods to setPassword() and verifyPassword(inputPassword) securely.

// class PasswordManager {
//     #password;

//     setPassword(newPassword) {
//         if (newPassword.length >= 6) {
//             this.#password = newPassword;
//             console.log(`Password set successfully`);
//         } else {
//             console.log(`Password must be atleast 6 characters long`);
//         }
//     }

//     verifyPassword(input) {
//         if (input === this.#password) {
//             console.log(`Access Granted.`);
//             return true;
//         } else {
//             console.log(`Access Denied.`);
//             return false;
//         }
//     }
// }
// const user = new PasswordManager();
// user.setPassword('Abhi@123');
// user.verifyPassword('abcd123');
// user.verifyPassword('Abhi@123');


// 3. Create a User class with private properties like email and password. Only allow access through methods (getter and setter methods). 

// class User {
//     #email;
//     #password;

//     constructor(email, password){
//         this.#email = email;
//         this.#password = password;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         if (newEmail.includes("@")) {
//             this.#email = newEmail;
//             console.log("Email Updated");
//         } else {
//             console.log("Invalid email format");
//         }
//     }

//     get password() {
//         return `Access Denied: Cannot retrieve password`;
//     }

//     set password(newPassword) {
//         if (newPassword.length >= 6) {
//             this.#password = newPassword;
//             console.log("Password updated");
//         }else {
//             console.log("Password must be at least 6 characters.");
//         }
//     }
// }
// const user = new User("abhishikththul9@gmail.com");
// console.log(user.email);
// console.log(user.password);

// user.email = "abhithul9@gmail.com";
// user.password = "123";
// user.password = "Abhi@123";



// 4. Create a Door class with a private field isLocked. Provide methods to lock() and unlock(). Prevent direct access to isLocked.

// class Door {
//     #isLocked;

//     constructor() {
//         this.#isLocked = false;
//     }

//     lock() {
//         this.#isLocked = true;
//         console.log("Door is now locked");
//     }

//     unlock() {
//         this.#isLocked = false;
//         console.log("Door is now unlocked");
//     }

//     isLocked() {
//         return this.#isLocked;
//     }
// }

// const myDoor = new Door();
// console.log(myDoor.isLocked());
// myDoor.lock();
// console.log(myDoor.isLocked());
// myDoor.unlock();
// console.log(myDoor.isLocked());


// 5. Design a SecretNote class with private content. Allow only a method read(secretCode) to read it if the correct code is entered. 

// class SecretNote {
//     #content;
//     #secretCode;

//     constructor(content, secretCode) {
//         this.#content = content;
//         this.#secretCode = secretCode;
//     }

//     read(secretCode) {
//         if (secretCode === this.#secretCode) {
//             console.log("Note Content: " + this.#content);
//         }else {
//             console.log("Incorrect secret code. Access Denied");
//         }
//     }
// }
// const myNote = new SecretNote("Welcome to Meow Meow Gang.", "12345");
// myNote.read("54321");
// myNote.read("12345");



// 6. Make  a  VotingMachine  class  where  votes  are  private.  Only  a  public  method castVote(candidateName) and showResults(adminPassword) can interact with votes. 

// class VotingMachine {
//     #votes;
//     #adminPassword;

//     constructor(adminPassword) {
//         this.#votes = {}; // this object will store the vote counts for candidates
//         this.#adminPassword = adminPassword;
//     }

//     castVote(candidateName) {
//         if (this.#votes[candidateName]) {
//             this.#votes[candidateName] += 1;
//         }else {
//             this.#votes[candidateName] = 1;
//         }
//         console.log(`${candidateName} has received vote.`);
//     }

//     showResult(adminPassword) {
//         if (adminPassword === this.#adminPassword) {
//             console.log("Voting Result: ");
//             for (const [candidate, votes] of Object.entries(this.#votes)) {
//                 console.log(`${candidate}: ${votes} votes`);
//             }
//         }else {
//             console.log("Incorrect password. Access denied");
//         }
//     }
// }

// const machine = new VotingMachine("admin123");
// machine.castVote("Alice");
// machine.castVote("Bob");
// machine.castVote("Alice");

// machine.showResult("wrongPassword");
// machine.showResult("admin123");



// Inheritance


// 1. Create a Person class with properties name and age. Then create a Teacher class that inherits from Person and adds a subject property and a method teach().

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Teacher extends Person {
//     constructor(name, age, subject) {
//         super(name, age);
//         this.subject = subject;
//     }

//     teach() {
//         console.log(`${this.name} teaches a subject ${this.subject} & is aged ${this.age}`);
//     }
// }

// const teacher1 = new Teacher("Abhi", 24, "DSA");
// teacher1.teach();



// 2. Create a Shape class with a method calculateArea(). Then create Rectangle and Circle classes that inherit from Shape and override the calculateArea() method.

// class Shape {
//     calculateArea(){
//         console.log("Calculate Area.")
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }

//     calculateArea() {
//         const area = this.width * this.height;
//         console.log(`Area of Rectangle: ${area}`);
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     calculateArea() {
//         const area = Math.PI * this.radius * this.radius;
//         console.log(`Area of Circle: ${area.toFixed(2)}`);
//     }
// }

// const rect = new Rectangle(10, 5);
// rect.calculateArea();

// const circ = new Circle(7);
// circ.calculateArea();



// 3. Design a Vehicle class with common properties like speed. Create Bike and Truck classes that extend Vehicle and add their specific properties/methods.

// class Vehicle {
//     constructor(speed) {
//         this.speed = speed;
//     }

//     display() {
//         console.log(`Speed : ${this.speed} km/h`);
//     }
// }

// class Bike extends Vehicle {
//     constructor(speed, type) {
//         super(speed);
//         this.type = type;
//     }

//     details() {
//         console.log(`Bike Type: ${this.type}`);
//         this.display();
//     }
// }

// class Truck extends Vehicle {
//     constructor(speed, capacity) {
//         super(speed);
//         this.capacity = capacity;
//     }
//     details() {
//         console.log(`Truck Capacity: ${this.capacity} tons`);
//         this.display();
//     }
// }

// const bike = new Bike(120, "sport");
// bike.details();

// const truck = new Truck(80, 15);
// truck.details();



// 4. Create an Appliance class with properties like brand and power. Create WashingMachine and Microwave classes extending Appliance.

// class Appliance {
//     constructor(brand, power) {
//         this.brand = brand;
//         this.power = power;
//     }

//     info() {
//         console.log(`Brand: ${this.brand}, Power: ${this.power} W`);
//     }
// }

// class WashingMachine extends Appliance {
//     constructor(brand, power, loadCapacity) {
//         super(brand, power);
//         this.loadCapacity = loadCapacity;
//     }

//     wash() {
//         console.log(`${this.brand} washing machine is washing clothes...`);
//         this.info();
//         console.log(`Load Capacity: ${this.loadCapacity} kg`);
//     }
// }

// class Microwave extends Appliance {
//     constructor (brand, power, volume) {
//         super(brand, power);
//         this.volume = volume;
//     }
//     heat() {
//         console.log(`${this.brand} microwave is heating food...`);
//         this.info();
//         console.log(`Volume: ${this.volume} L`);
//     }
// }

// const wm = new WashingMachine("LG", 1500, 7);
// wm.wash();
// const mw = new Microwave("Samsung", 1200, 30);
// mw.heat();



// 5. Design a SportsPlayer class with name and team. Create Cricketer and Footballer classes extending it, each with their own method (bat() or kick()).

// class SportsPlayer {
//     constructor (name, team) {
//         this.name = name;
//         this.team = team;
//     }
//     display(){
//         console.log(`Player: ${this.name}, Team: ${this.team}`);
//     }
// }

// class Cricketer extends SportsPlayer {
//     constructor(name, team){
//         super(name, team);
//     }

//     bat() {
//         this.display();
//         console.log(`${this.name} is batting !`);
//     }
// }

// class Footballer extends SportsPlayer {
//     constructor ( name, team) {
//         super(name, team);
//     }

//     kick(){
//         this.display();
//         console.log(`${this.name} is kicking the ball !`);
//     }
// }

// const player1 = new Cricketer("Virat Kohli", "India");
// player1.bat();
// const player2 = new Footballer("Lionel Messi", "Argentina");
// player2.kick();



// 6. Build a Notification base class with method send(). Create EmailNotification, SMSNotification, and PushNotification subclasses overriding send() differently.


// class Notification{
//     send() {
//         console.log("Sending a Notification...");
//     }
// }
// class EmailNotification extends Notification {
//     send(){
//         console.log("Sending an Email notification");        
//     }
// }
// class SMSNotification extends Notification {
//     send() {
//         console.log("Sending an SMS Notification");
//     }
// }
// class PushNotification extends Notification {
//     send() {
//         console.log("Sending a Push Notification"); 
//     }
// }
// const email = new EmailNotification();
// email.send();
// const sms = new SMSNotification();
// sms.send();
// const push = new PushNotification();
// push.send();



// 7. Create  a  Gadget  class  with  model  and  price.  Inherit  a  Smartphone  class  that  adds cameraQuality and a takePhoto() method.

// class Gadget {
//     constructor(model, price) {
//         this.model = model;
//         this.price = price;
//     }
//     details() {
//         console.log(`Model: ${this.model}, Price: ${this.price}`);
//     }
// }
// class Smartphone extends Gadget {
//     constructor(model, price, cameraQuality) {
//         super(model, price);
//         this.cameraQuality = cameraQuality;
//     }

//     takePhoto() {
//         this.details();
//         console.log(`Taking photo with ${this.cameraQuality} camera`);
//     }
// }

// const phone = new Smartphone("Realme X", 20000, "12 MP");
// phone.takePhoto();