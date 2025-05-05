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




// Advance

// 1. Create a Library class that holds a collection of Book objects. Implement methods like addBook(book), removeBook(title), and findBook(title).

// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
//     display(){
//         console.log(`${this.title} by ${this.author}`);
//     }
// }

// class Library {
//     constructor(){
//         this.books = [];
//     }

//     addBook(book){
//         this.books.push(book);
//         console.log(`Added: ${book.title}`);
//     }

//     removeBook(title) {
//         const index = this.books.findIndex(book => book.title === title);
//         if (index !== -1){
//             const removed = this.books.splice(index, 1)[0];
//             console.log(`Removed: ${removed.title}`);
//         }else {
//             console.log(`Book Titled ${title} not found`);
//         }
//     }

//     findBook(title) {
//         const found = this.books.find(book => book.title === title);
//         if (found) {
//             console.log(`Found: ${found.title}`);
//         }else {
//             console.log(`Book Titled ${title} not found`);
//         }
//     }

//     listBooks(){
//         console.log(`\nBooks in Library:`);
//         this.books.forEach(book => book.display());
//     }
// }

// const library = new Library();

// const book1 = new Book("The Alchemist", "Paulo Coelho");
// const book2 = new Book("1984", "George Orwell");

// library.addBook(book1);
// library.addBook(book2);
// library.findBook("1984");
// library.removeBook("The Alchemist");
// library.listBooks();


// 2. Create  a  Product  class  with  name,  price,  and  private  stockQuantity.  Add  methods  to purchase(quantity) and restock(quantity). Inherit a PerishableProduct class from Product and add expiryDate.

// class Product {
//     #stockQuantity;
//     constructor(name, price, stockQuantity) {
//         this.name = name;
//         this.price = price;
//         this.#stockQuantity =stockQuantity;
//     }

//     purchase(quantity) {
//         if (quantity <= this.#stockQuantity){
//             this.#stockQuantity -= quantity;
//             console.log(`Purchased ${quantity} of ${this.name}. Remaining stock: ${this.#stockQuantity}`);
//         }else {
//             console.log(`Insufficient Stock for ${this.name}. Only ${this.#stockQuantity} left.`);
//         }
//     }

//     restock(quantity) {
//         this.#stockQuantity += quantity;
//         console.log(`Restocked ${quantity} of ${this.name}. Total stock: ${this.#stockQuantity}`);
//     }

//     getStock() {
//         return this.#stockQuantity;
//     }
// }

// class PerishableProduct extends Product {
//     constructor(name, price, stockQuantity, expiryDate) {
//         super(name, price, stockQuantity);
//         this.expiryDate = expiryDate;
//     }

//     showDetails() {
//         console.log(`${this.name} | ${this.price} | Expires on: ${this.expiryDate}`);
//     }
// }

// const milk = new PerishableProduct("Milk", 50, 10, "2025-06-01");
// milk.showDetails();
// milk.purchase(3);
// milk.restock(5);
// console.log(`Stock Left : ${milk.getStock()}`);


// 3. Design a GameCharacter class with name, health, and strength. Then create Warrior and Mage subclasses that have additional abilities like attack() and castSpell().

// class GameCharacter {
//     constructor(name, health, strength) {
//         this.name = name;
//         this.health = health;
//         this.strength = strength;
//     }
//     displayStats(){
//         console.log(`${this.name} | Health: ${this.health} | Strength: ${this.strength}`);
//     }
// }

// class Warrior extends GameCharacter {
//     constructor(name, health, strength, weapon) {
//         super(name, health, strength);
//         this.weapon = weapon;
//     }

//     attack(){
//         console.log(`${this.name} attacks with ${this.weapon}, dealing ${this.strength} damage!`);
//     }
// }

// class Mage extends GameCharacter {
//     constructor(name, health, strength, magicPower) {
//         super(name, health, strength);
//         this.magicPower = magicPower;
//     }
//     castSpell(spellName) {
//         console.log(`${this.name} casts ${spellName} with magic power ${this.magicPower}`);
//     }
// }

// const warrior = new Warrior("Aragon", 100, 25, "Sword");
// const mage = new Mage("Gandalf", 80, 15, 500000);

// warrior.displayStats();
// warrior.attack();
// console.log();
// mage.displayStats();
// mage.castSpell("Avada Kadabra!!!!!");


// 4. Employee Management System 
// • Task: Create an Employee class with properties like name, id, and department. 
// • Encapsulation: Make the salary property private. 
// • Methods: Implement methods to setSalary() and getSalary(). 
// • Inheritance: Create a subclass Manager that adds a teamSize property and a method getTeamSize().

// class Employee{
//     #salary;
//     constructor(name, id, department) {
//         this.name = name;
//         this.id = id;
//         this.department = department;
//     }

//     setSalary(amount) {
//         if (amount > 0) {
//             this.#salary = amount;
//         }else {
//             console.log("Invalid Salary Amount.");
//         }
//     }

//     getSalary() {
//         return this.#salary;
//     }

//     display() {
//         console.log(`Name: ${this.name} | ID: ${this.id} | Dept.: ${this.department}`);
//     }
// }

// class Manager extends Employee {
//     constructor(name, id, department, teamSize) {
//         super(name, id, department);
//         this.teamSize = teamSize;
//     }

//     getTeamSize() {
//         return this.teamSize;
//     }

//     displayManagerInfo() {
//         this.display();
//         console.log(`Team Size: ${this.getTeamSize()}`);
//     }
// }

// const emp1 = new Employee("Abhi", 101, "HR");
// emp1.setSalary(50000);
// emp1.display();
// console.log(`Salary: ${emp1.getSalary()}`);

// console.log();

// const manager1 = new Manager("Bob", 201, "Engineering", 5);
// manager1.setSalary(90000);
// manager1.displayManagerInfo();
// console.log(`Salary: ${manager1.getSalary()}`);



// 5. Online Course Platform 
// • Task: Design a Course class with properties title, instructor, and duration. 
// • Encapsulation: Keep the enrolledStudents list private. 
// • Methods: Add methods to enrollStudent(studentName) and getEnrolledStudents(). 
// • Inheritance: Create a subclass PaidCourse that includes a price property and a method applyDiscount(discountPercentage).

// class Course {
//     #enrolledStudents = [];

//     constructor (title, instructor, duration) {
//         this.title = title;
//         this.instructor = instructor;
//         this.duration = duration;
//     }

//     enrollStudent(studentName) {
//         this.#enrolledStudents.push(studentName);
//         console.log(`${studentName} has been enrolled in ${this.title}.`);
//     }

//     getEnrolledStudents(){
//         return [...this.#enrolledStudents];
//     }

//     displayCourseInfo() {
//         console.log(`Course: ${this.title} | Instructor: ${this.instructor} | Duration: ${this.duration} hours`);
//     }
// }

// class PaidCourse extends Course {
//     constructor(title, instructor, duration, price) {
//         super(title, instructor, duration);
//         this.price = price;
//     }

//     applyDiscount(discountPercentage) {
//         if (discountPercentage > 0 && discountPercentage <= 100) {
//             const discountAmount = (this.price * discountPercentage) / 100;
//             this.price -= discountAmount;
//             console.log(`Discount applied! New Price is: ${this.price}`);
//         }else {
//             console.log("Invalid discount Percentage.");
//         }
//     }

//     displayPaidCourseInfo(){
//         this.displayCourseInfo();
//         console.log(`Price: ${this.price}`);
//     }
// }

// const jsCourse = new PaidCourse("JavaScript Bootcamp", "Runali Ma'am", 40, 10000);
// jsCourse.displayPaidCourseInfo();
// console.log();
// jsCourse.enrollStudent("Abhi");
// jsCourse.enrollStudent("Riya");
// console.log(`Enrolled Students: ${jsCourse.getEnrolledStudents()}`);
// jsCourse.applyDiscount(20);


// 6. Library Catalog System 
// • Task: Implement a LibraryItem class with properties title and publicationYear. 
// • Inheritance: Create subclasses Book and Magazine. Book should have an author property, 
// while Magazine should have an issueNumber. 
// • Methods: Each subclass should have a method getDetails() that returns all relevant information. 

// class LibraryItem {
//     constructor(title, publicationYear) {
//         this.title = title;
//         this.publicationYear = publicationYear;
//     }

//     getDetails() {
//         return `Title: ${this.title} | Year: ${this.publicationYear}`;
//     }
// }

// class Book extends LibraryItem{
//     constructor(title, publicationYear, author) {
//         super(title, publicationYear);
//         this.author = author;
//     }

//     getDetails() {
//         return `Book - Title: ${this.title} | Author: ${this.author} | Year: ${this.publicationYear}`;
//     }
// }

// class Magazine extends LibraryItem { 
//     constructor(title, publicationYear, issueNumber) {
//         super(title, publicationYear);
//         this.issueNumber = issueNumber;
//     }
//     getDetails() {
//         return `Magazine - Title: ${this.title} | Issue No.: ${this.issueNumber} | Year: ${this.publicationYear}`;
//     }
// }

// const book1 = new Book("The Silent Patient", 2019, "Alex Michaelides");
// const magazine1 = new Magazine("National Geographic", 2013, 198);

// console.log(book1.getDetails());
// console.log(magazine1.getDetails());




// 7. E-Commerce Shopping Cart 
// • Task: Create a Product class with properties name, price, and quantity. 
// • Encapsulation: Make the quantity property private. 
// • Methods: Implement methods to addStock(amount) and purchase(amount). 
// • Inheritance: Develop a subclass DigitalProduct that overrides the purchase() method to handle license keys instead of stock.


// class Product {
//     #quantity;

//     constructor(name, price, quantity) {
//         this.name = name;
//         this.price = price;
//         this.#quantity = quantity;
//     }

//     addStock(amount) {
//         if (amount > 0) {
//             this.#quantity += amount;
//             console.log(`${amount} items added. New Stock: ${this.#quantity}`);
//         }
//     }

//     purchase(amount) {
//         if (amount <= this.#quantity){
//             this.#quantity -= amount;
//             console.log(`Purchased ${amount} ${this.name}(s). Remaining Stock: ${this.#quantity}`);
//         }else {
//             console.log(`Not enough stock for ${this.name}. Only ${this.#quantity} left`);
//         }
//     }

//     getStock() {
//         return this.#quantity;
//     }
// }

// class DigitalProduct extends Product{
//     constructor(name, price, licenseKey) {
//         super(name, price, Infinity);
//         this.licenseKey = licenseKey;
//     }

//     purchase(amount) {
//         console.log(`Purchased ${amount} copy/copies of ${this.name}. License key: ${this.licenseKey}`);
//     }
// }

// const tshirt = new Product("T-Shirt", 499, 10);
// tshirt.purchase(2);
// tshirt.addStock(5);

// const software = new DigitalProduct("Antivirus", 1999, "ABC-123-ZXC-456");
// software.purchase(1);



// 8. Banking Application 
// • Task: Design a BankAccount class with properties accountNumber and accountHolder. 
// • Encapsulation: Keep the balance property private. 
// • Methods: Include methods deposit(amount), withdraw(amount), and getBalance(). 
// • Inheritance: Create subclasses SavingsAccount and CheckingAccount, each with specific rules for withdrawals and deposits. 


// class BankAccount {
//     #balance;

//     constructor(accountNumber, accountHolder, initialBalance = 0){
//         this.accountNumber = accountNumber;
//         this.accountHolder = accountHolder;
//         this.#balance = initialBalance;
//     }

//     deposite(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`Deposited ${amount}. New Balance: ${this.#balance}`);
//         }
//     }

//     withdraw(amount) {
//         if (amount <= this.#balance) {
//             this.#balance -= amount;
//             console.log(`Withdrew ${amount}. New Balance: ${this.#balance}`);
//         } else {
//             console.log("Insufficient Balance");
//         }
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// class SavingsAccount extends BankAccount {
//     constructor(accountNumber, accountHolder, initialBalance = 0, interestRate = 0.03) {
//         super(accountNumber, accountHolder, initialBalance);
//         this.interestRate = interestRate;
//     }

//     addInterest() {
//         const interest = this.getBalance() * this.interestRate;
//         this.deposite(interest);
//         console.log(`Interest of ${interest.toFixed(2)} added`);
//     }

//     withdraw(amount) {
//         if (amount > 5000) {
//             console.log(`Savings account withdrawal limit is 5000/-`);
//         }else {
//             super.withdraw(amount);
//         }
//     }
// }

// class CheckingAccount extends BankAccount{
//     constructor(accountNumber, accountHolder, initialBalance = 0, overdraftLimit = 1000) {
//         super(accountNumber, accountHolder, initialBalance);
//         this.overdraftLimit = overdraftLimit;
//     }

//     withdraw(amount) {
//         if (amount <= this.getBalance() + this.overdraftLimit) {
//             const newBalance = this.getBalance() - amount;
//             console.log(`Withdrew ${amount}. Balance may be negative`);
//             super.deposite(-amount);
//         }else {
//             console.log("Overdraft limit exceeded");
//         }
//     }
// }

// const savings = new SavingsAccount("SB123", "Abhi Thul", 10000);
// savings.withdraw(6000);
// savings.withdraw(3000);
// savings.addInterest();
// console.log(`Final Balance: ${savings.getBalance()}`);

// console.log("-----------------");

// const checking = new CheckingAccount("CH456", "Abhi Thul", 2000);
// checking.withdraw(2500);
// checking.deposite(1000);
// console.log("Final Balance:", checking.getBalance());