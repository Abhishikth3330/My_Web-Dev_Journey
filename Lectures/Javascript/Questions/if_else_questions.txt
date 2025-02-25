// 1. Check if a number is even or odd
// var number = 27;
// if (number % 2 == 0){
//     console.log("The number is Even.");
// }else{
//     console.log("The number is Odd.");
// }


// 2. Find the largest among three numbers.
// var a = 10, b = 30, c = 20;
// if (a > b && a > c){
//     console.log(a + " is Largest.");
// }else if (b > a && b > c){
//     console.log(`${b} is Largest.`);
// }else{
//     console.log(c + " is Largest.");
// }


// 3. Check if a number is positive, negative, or zero. 
// var number = -10;
// if (number == 0){
//     console.log(`${number} is zero.`);
// } else if (number > 0) {
//     console.log(`${number} is positive.`);
// }else{
//     console.log(`${number} is nagative.`);
// }


// 4. Determine if a year is a leap year or not.
// var year = 2024;
// if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
//     console.log(`${year} is a Leap Year.`)
// }else{
//     console.log("Not a leap year");
// }


// 5. Check if a given character is a vowel or consonant.
// var vowels = ['a', 'e', 'i', 'o', 'u'];
// var char = 'a';
// if (vowels.includes(char)){
//     console.log("Character is a vowel.");
// }else{
//     console.log("Character is a consonent.")
// }


// 6. Find the grade based on marks: 
// o >=90 → A 
// o 80-89 → B 
// o 70-79 → C 
// o 60-69 → D 
// o <60 → F

// var marks = 87;
// if (marks >= 90){
//     console.log("A Grade");
// }else if(marks >= 80 && marks <= 89){
//     console.log("B Grade");
// }else if(marks >= 70 && marks <= 79){
//     console.log("C Grade");
// }else if(marks >= 60 && marks <= 69){
//     console.log("D Grade");
// }else{
//     console.log("F Grade");
// }


// 7. Check if a number is divisible by both 5 and 11.
// var num = 385;
// if (num % 5 == 0 && num % 11 == 0){
//     console.log(`${num} is divisible by 5 and 11.`);
// }else{
//     console.log(`${num} is not divisible by 5 and 11.`);
// }


// 8. Find the absolute value of a number. 
// var num = -10;
// if (num < 0){
//     console.log((-1) * num);
// }else{
//     console.log(num);    
// }


// 9. Check if a triangle is valid based on the sum of its angles
// var a = 90, b = 45, c = 45;
// if ((a + b + c) == 180){
//     console.log("Triangle is Valid");
// }else{
//     console.log("Invalid Triangle");
// }


// 10.  Calculate electricity bill based on units consumed: 
// o First 100 units: ₹5/unit 
// o Next 100 units: ₹7/unit 
// o Above 200 units: ₹10/unit

// var units = 250;
// if (units >= 1 && units <= 100){
//     console.log(`${units * 5} will be the electricity bill.`);
// }else if (units >= 101 && units <= 200){
//     console.log(`${units * 7} will be the electricity bill.`);
// }else if (units >= 201){
//     console.log(`${units * 10} will be the electricity bill.`);
// }


// 11.  Check if a person’s salary is taxable based on slabs: 
// o <2.5 Lakh → No Tax 
// o 2.5L - 5L → 5% Tax 
// o 5L - 10L → 20% Tax 
// o >10L → 30% Tax 

// var salary = 6.5; // in lakhs
// if (salary < 2.5){
//     console.log("No Tax");
// }else if (salary > 2.5 && salary < 5){
//     console.log("5% Tax");
// }else if (salary > 5 && salary < 10){
//     console.log("20% Tax");
// }else if (salary > 10){
//     console.log("30% Tax");
// }


// 12.  Find the day of the week based on a number (1-7).
// var num = 3;
// var days = {1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday"};
// console.log(days[num]);


// 13.  Check if a number is a three-digit number.
// var num = 299;
// if (num >= 100 && num <= 999){
//     console.log(`${num} is a three digit number.`);
// }else{
//     console.log("Not a three digit number.")
// }


// 14.  Find the roots of a quadratic equation using the discriminant formula.
// var a = 1, b = -3, c = 2;
// var discriminant = b * b - 4 * a * c;
// if (discriminant > 0) {
//     var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//     console.log(`Roots are real and different: ${root1}, ${root2}`);
// } else if (discriminant === 0) {
//     var root = -b / (2 * a);
//     console.log(`Roots are real and same: ${root}`);
// } else {
//     console.log("Roots are complex and different.");
// }


// 15.  Check if a number is greater than 100 or not.
// var num = 101;
// if (num > 100){
//     console.log("Number is greater than 100");
// }else{
//     console.log("Number is not greater than 100");
// }


// 16.  Check if a character is uppercase or lowercase.
// var char = 'A';
// if (char >= 'A' && char <= 'Z') {
//     console.log("Character is uppercase.");
// } else if (char >= 'a' && char <= 'z') {
//     console.log("Character is lowercase.");
// } else {
//     console.log("Character is not a letter.");
// }


// 17.  Check if a number is a multiple of 3.
// var num = 27;
// if (num % 3 == 0){
//     console.log("Number is a multiple of 3");
// }else{
//     console.log("Number is not a multiple of 3");
// }


// 18.  Check if a number is prime or not.
// var num = 5;
// if (num === 1){
//     console.log("1 is neither prime nor composite.");
// }else{
//     for (var i = 2; i <= num; i++){
//         if (num % i == 0){
//             console.log("Prime Number.");
//         }
//     }
// }


// 19.  Find the smallest among three numbers.
// var a = 10, b = 30, c = 20;
// if (a < b && a < c){
//     console.log(a + " is Smallest.");
// }else if (b < a && b < c){
//     console.log(`${b} is Smallest.`);
// }else{
//     console.log(c + " is Smallest.");
// }


// 20.  Check if a given password is correct (compare input with "admin123").
// var password = "admin123";
// var user_password = "admin123";
// if (password == user_password){
//     console.log("Correct Password.");
// }else{
//     console.log("Incorrect Password");
// }


// 21.  Check if a triangle is scalene, isosceles, or equilateral
// var a = 5, b = 5, c = 5;
// if (a === b && b === c) {
//     console.log("The triangle is Equilateral.");
// } else if (a === b || b === c || a === c) {
//     console.log("The triangle is Isosceles.");
// } else {
//     console.log("The triangle is Scalene.");
// }


// 22.  Calculate the bonus for an employee based on experience: 
// o <5 years → 5% bonus 
// o 5-10 years → 10% bonus 
// o >10 years → 15% bonus 

// var exp = 7;
// if (exp < 5){
//     console.log("5% Bonus.");
// }else if(exp >= 5 && exp < 10){
//     console.log("10% Bonus.");
// }else{
//     console.log("15% Bonus.");
// }


// 23.  Check if a user is eligible for a scholarship (marks > 85 & income < 5L).
// var marks = 92, income = 4.5;
// if (marks >= 85 && income < 5){
//     console.log("Eligible for Scholarship.");
// }else{
//     console.log("Not Eligible.")
// }


// 24.  Determine if a website domain is valid (ends with .com or .org).
// var email = "abhishikththul9@gmail.com";
// if (email.endsWith(".com" || ".org")){
//     console.log("Valid Domain");
// }else{
//     console.log("Not Valid");
// }


// 25.  Check if a date is valid (day, month, year are correct).
// var day = 29, month = 2, year = 2024;
// if (month < 1 || month > 12 || day < 1 || day > 31){
//     console.log("Invalid date");
// }else {
//     var isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
//     var daysInMonth = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
//     if (day > daysInMonth[month - 1]) {
//         console.log("Invalid date");
//     } else {
//         console.log("Valid date");
//     }
// }


// 26.  Calculate the fare for a taxi ride based on distance travelled:
// o First 5 km: ₹10/km 
// o Next 10 km: ₹8/km 
// o Above 15 km: ₹6/km

// var distance = 15;
// if (distance >= 1 && distance <= 5){
//     console.log(10 * distance);
// }else if(distance >= 6 && distance <=15){
//     console.log(8 * distance);
// }else if (distance >= 16){
//     console.log(6 * distance);
// }


// 27.  Determine if a person qualifies for a credit card (age > 21 and credit score > 700).
// var age = 23, score = 800;
// if (age >= 21 && score > 700){
//     console.log("Qualified");    
// }else {
//     console.log("Not Qualified");
// }


// 28.  Check if an email belongs to a specific company (@xyz.com). 
// var site = "abhi@xyz.com";
// if (site.endsWith("@xyz.com")){
//     console.log("Belongs to xyz.");
// }else{
//     console.log("Does Not belong to xyz");
// }


// 29.  Check if an online shopping cart qualifies for a discount (total > ₹2000).
// var total = 2100;
// if (total > 2000){
//     console.log("Qualifies for a discount.");
// }else{
//     console.log("Not qualified for a discount.");
// }


// 30.  Validate a password (should contain at least one number and one special character).
// var password = "Test@123";
// if (password.length < 5) {
//     console.log("Invalid password: Must be at least 5 characters long");
// } else if (!/[0-9]/.test(password)) {
//     console.log("Invalid password: Must contain at least one number");
// } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//     console.log("Invalid password: Must contain at least one special character");
// } else {
//     console.log("Valid password");
// }


// 31.  Check if a person is a child (age < 12), teenager (13-19), adult (20-59), or senior citizen (60+).
// var age = 23;
// if (age <= 12){
//     console.log("Person is a Child.")
// }else if (age >= 13 && age <= 19){
//     console.log("Person is a Teenager.")
// }else if (age >= 20 && age <= 59){
//     console.log("Person is an Adult.")
// }else{
//     console.log("Senior Citizen.")
// }


// 32.  Check if a number is even, odd, or zero.
// var number = 23;
// if (number % 2 == 0){
//     console.log("Number is Even")
// }else if (number == 0){
//     console.log("Number is Zero")
// }else{
//     console.log("Number is Odd");
// }


// 33.  Check if a letter is a vowel, consonant, or a special character.
// var vowels = ['a', 'e', 'i', 'o', 'u'];
// var letter = '@';
// if (letter.includes(vowels) || (letter >= 'a' && letter <= 'z')){
//     console.log(`${letter} is a Vowel`);
// }else if(!letter.includes(vowels) || (letter <= 'a' && letter >= 'z') ){
//     console.log(`${letter} is a Special Character`);
// }else{
//     console.log(`${letter} is a Consonent`);
// }


// 34.  Check if a given number is one-digit, two-digit, or three-digit.
// var num = 123;
// if (num >= 0 && num <= 9 || num <= 0 && num >= -9) {
//     console.log("The number is a one-digit number.");
// } else if (num >= 10 && num <= 99 || num <= -10 && num >= -99) {
//     console.log("The number is a two-digit number.");
// } else if (num >= 100 && num <= 999 || num <= -100 && num >= -999) {
//     console.log("The number is a three-digit number.");
// } else {
//     console.log("The number has more than three digits.");
// }


// 35.  Determine the grade of a student based on marks: 
// o >=90 → A 
// o 80-89 → B 
// o 70-79 → C 
// o 60-69 → D 
// o <60 → Fail

// var marks = 88;
// if (marks >= 90){
//     console.log("A Grade");
// }else if (marks >= 80 && marks <= 89){
//     console.log("B Grade");
// }else if (marks >= 70 && marks <= 79){
//     console.log("C Grade");
// }else if (marks >= 60 && marks <= 69){
//     console.log("D Grade");
// }else{
//     console.log("Fail");
// }


// 36.  Check if a year is a leap year, century year, or neither
// var year = 2024;
// if (year % 400 === 0) {
//     console.log("The year is a century leap year.");
// } else if (year % 100 === 0) {
//     console.log("The year is a century year but not a leap year.");
// } else if (year % 4 === 0) {
//     console.log("The year is a leap year.");
// } else {
//     console.log("The year is neither a leap year nor a century year.");
// }


// 37.  Determine the type of triangle based on its sides (equilateral, isosceles, scalene).
// var a = 5, b = 5, c = 5;
// if (a === b && b === c) {
//     console.log("The triangle is Equilateral.");
// } else if (a === b || b === c || a === c) {
//     console.log("The triangle is Isosceles.");
// } else {
//     console.log("The triangle is Scalene.");
// }


// 38.  Check if a person can apply for a job based on experience: 
// o <1 year → Intern 
// o 1-3 years → Junior Developer 
// o 3-6 years → Senior Developer 
// o >6 years → Manager 

// var exp = 3;
// if (exp < 1){
//     console.log("Intern.")
// }else if (exp >= 1 && exp <= 3){
//     console.log("Junior Developer")
// }else if (exp >= 3 && exp <= 6){
//     console.log("Senior Developer")
// }else{
//     console.log("Manager")
// }


// 39.  Check the temperature category: 
// o <0°C → Freezing 
// o 0-10°C → Cold 
// o 11-20°C → Cool 
// o 21-30°C → Warm 
// o >30°C → Hot

// var temp = 17;
// if (temp < 0){
//     console.log("Freezing")
// }else if (temp >= 0 && temp <= 10){
//     console.log("Cold");
// }else if (temp >= 11 && temp <= 20){
//     console.log("Cool");
// }else if (temp >= 21 && temp <= 30){
//     console.log("Warm");
// }else{
//     console.log("Hot");
// }

// 40.  Check a person's BMI category: 
// o <18.5 → Underweight 
// o 18.5-24.9 → Normal 
// o 25-29.9 → Overweight 
// o 30+ → Obese

// var weight = 70; // (kg)
// var height = 1.75; // (meters)
// var bmi = weight / (height * height);
// if (bmi < 18.5) {
//     console.log("Underweight");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("Normal");
// } else if (bmi >= 25 && bmi <= 29.9) {
//     console.log("Overweight");
// } else {
//     console.log("Obese");
// }


// 41.  Determine the type of bank account based on balance: 
// o <5000 → Basic Account 
// o 5000-50000 → Savings Account 
// o >50000 → Premium Account

// var balance = 30000;
// if (balance < 5000) {
//     console.log("Basic Account");
// } else if (balance >= 5000 && balance <= 50000) {
//     console.log("Savings Account");
// } else {
//     console.log("Premium Account");
// }


// 42.  Check if a mobile number is valid based on length and starting digit.
// var mobileNumber = "9876543210";
// if (/^[6789]\d{9}$/.test(mobileNumber)) {
//     console.log("Valid mobile number");
// } else {
//     console.log("Invalid mobile number");
// }


// 43.  Determine the shipping cost based on purchase amount: 
// o <500 → ₹50 shipping fee 
// o 500-1000 → ₹30 shipping fee 
// o >1000 → Free shipping

// var purchase = 750;
// if (purchase < 500) {
//     console.log("Shipping fee: ₹50");
// } else if (purchase >= 500 && purchase <= 1000) {
//     console.log("Shipping fee: ₹30");
// } else {
//     console.log("Free shipping");
// }


// 44.  Check if a given date falls on a weekday or weekend.
// getDay() ==> 
// 0 → Sunday
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday

// var date = new Date("2024-02-24");
// var day = date.getDay();
// if (day === 0 || day === 6) {
//     console.log("Weekend");
// } else {
//     console.log("Weekday");
// }

// 45.  Determine the type of internet plan based on speed: 
// o <5 Mbps → Basic Plan 
// o 5-25 Mbps → Standard Plan 
// o 25-100 Mbps → Premium Plan 
// o >100 Mbps → Ultra Plan

// var speed = 50;
// if (speed < 5) {
//     console.log("Basic Plan");
// } else if (speed >= 5 && speed < 25) {
//     console.log("Standard Plan");
// } else if (speed >= 25 && speed <= 100) {
//     console.log("Premium Plan");
// } else {
//     console.log("Ultra Plan");
// }


// var salary = 750000;
// if (salary < 250000) {
//     console.log("No tax");
// } else if (salary >= 250000 && salary <= 500000) {
//     console.log("Tax: " + (salary * 0.05) + " INR");
// } else if (salary > 500000 && salary <= 1000000) {
//     console.log("Tax: " + (salary * 0.20) + " INR");
// } else {
//     console.log("Tax: " + (salary * 0.30) + " INR");
// }


// 47.  Decide movie ticket price based on age: 
// o <12 years → ₹100 
// o 12-60 years → ₹200 
// o >60 years → ₹150

// var age = 30;
// if (age < 12) {
//     console.log("Ticket Price: ₹100");
// } else if (age >= 12 && age <= 60) {
//     console.log("Ticket Price: ₹200");
// } else {
//     console.log("Ticket Price: ₹150");
// }

// 48.  Check if an entered password is too short, medium, or strong based on length and characters.
// var password = "Password@123";
// if (password.length < 6) {
//     console.log("Password is too short");
// } else if (password.length >= 6 && password.length < 10) {
//     console.log("Password is medium");
// } else {
//     var hasNumber = /\d/.test(password);
//     var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
//     if (hasNumber && hasSpecialChar) {
//         console.log("Password is strong");
//     } else {
//         console.log("Password is medium");
//     }
// }


// 49.  Determine train ticket price based on class: 
// o General → ₹50 
// o Sleeper → ₹150 
// o AC 3-Tier → ₹500 
// o AC 2-Tier → ₹1000 
// o First Class → ₹2000

// var ticketClass = "Sleeper";
// if (ticketClass === "General") {
//     console.log("Ticket Price: ₹50");
// } else if (ticketClass === "Sleeper") {
//     console.log("Ticket Price: ₹150");
// } else if (ticketClass === "AC 3-Tier") {
//     console.log("Ticket Price: ₹500");
// } else if (ticketClass === "AC 2-Tier") {
//     console.log("Ticket Price: ₹1000");
// } else if (ticketClass === "First Class") {
//     console.log("Ticket Price: ₹2000");
// } else {
//     console.log("Invalid class");
// }


// 50.  Check if a number is divisible by 3, 5, or both.
// var number = 15;
// if (number % 3 === 0 && number % 5 === 0) {
//     console.log("Divisible by both 3 and 5");
// } else if (number % 3 === 0) {
//     console.log("Divisible by 3");
// } else if (number % 5 === 0) {
//     console.log("Divisible by 5");
// } else {
//     console.log("Not divisible by 3 or 5");
// }


// 51.  Check if a number is less than 10, between 10-50, or greater than 50.
// var number = 25;
// if (number < 10) {
//     console.log("Number is less than 10");
// } else if (number >= 10 && number <= 50) {
//     console.log("Number is between 10 and 50");
// } else {
//     console.log("Number is greater than 50");
// }


// 52.  Determine if a number is single-digit, two-digit, or three-digit.
// var number = 25;
// if (number >= 0 && number <= 9) {
//     console.log("Single-digit number");
// } else if (number >= 10 && number <= 99) {
//     console.log("Two-digit number");
// } else if (number >= 100 && number <= 999) {
//     console.log("Three-digit number");
// } else {
//     console.log("Number has more than three digits");
// }


// 53.  Determine the category of a person based on age: 
// o 0-12 → Child 
// o 13-19 → Teenager 
// o 20-35 → Young Adult 
// o 36-50 → Middle Aged 
// o >50 → Senior

// var age = 25;
// if (age >= 0 && age <= 12) {
//     console.log("Child");
// } else if (age >= 13 && age <= 19) {
//     console.log("Teenager");
// } else if (age >= 20 && age <= 35) {
//     console.log("Young Adult");
// } else if (age >= 36 && age <= 50) {
//     console.log("Middle Aged");
// } else {
//     console.log("Senior");
// }


// 54.  Classify a day of the week: 
// o 1 → Monday 
// o 2 → Tuesday 
// o ... 
// o 7 → Sunday 

// var dayNumber = 3;
// if (dayNumber === 1) {
//     console.log("Monday");
// } else if (dayNumber === 2) {
//     console.log("Tuesday");
// } else if (dayNumber === 3) {
//     console.log("Wednesday");
// } else if (dayNumber === 4) {
//     console.log("Thursday");
// } else if (dayNumber === 5) {
//     console.log("Friday");
// } else if (dayNumber === 6) {
//     console.log("Saturday");
// } else if (dayNumber === 7) {
//     console.log("Sunday");
// } else {
//     console.log("Invalid day number");
// }



// 5.  Determine if a student has passed or failed based on marks: 
// o <40 → Fail 
// o 40-59 → Pass 
// o 60-79 → Good 
// o 80-100 → Excellent

// var marks = 75;
// if (marks < 40) {
//     console.log("Fail");
// } else if (marks >= 40 && marks <= 59) {
//     console.log("Pass");
// } else if (marks >= 60 && marks <= 79) {
//     console.log("Good");
// } else if (marks >= 80 && marks <= 100) {
//     console.log("Excellent");
// } else {
//     console.log("Invalid marks");
// }


// 56.  Find the largest among three numbers using else if.
// var a = 15, b = 25, c = 10;
// if (a > b && a > c) {
//     console.log("Largest number is: " + a);
// } else if (b > a && b > c) {
//     console.log("Largest number is: " + b);
// } else {
//     console.log("Largest number is: " + c);
// }


// 57.  Check if a character is a vowel, consonant, or special symbol.
// var char = 'A';
// if (/[aeiouAEIOU]/.test(char)) {
//     console.log("Vowel");
// } else if (/[a-zA-Z]/.test(char)) {
//     console.log("Consonant");
// } else {
//     console.log("Special Symbol");
// }


// 58.  Determine the type of fuel needed for a vehicle: 
// o "Petrol" → Cars, Bikes 
// o "Diesel" → Trucks, Buses 
// o "Electric" → EVs 
// o "CNG" → Eco-friendly vehicles

// var fuelType = "Petrol";
// if (fuelType === "Petrol") {
//     console.log("Cars, Bikes");
// } else if (fuelType === "Diesel") {
//     console.log("Trucks, Buses");
// } else if (fuelType === "Electric") {
//     console.log("EVs");
// } else if (fuelType === "CNG") {
//     console.log("Eco-friendly vehicles");
// } else {
//     console.log("Invalid fuel type");
// }


// 59.  Assign a user role based on a given string: 
// o "admin" → Full Access 
// o "editor" → Can Edit Content 
// o "viewer" → Read-Only Access 
// o "guest" → Limited Access 
// o "Invalid role" if none of the above

// var userRole = "admin";
// if (userRole === "admin") {
//     console.log("Full Access");
// } else if (userRole === "editor") {
//     console.log("Can Edit Content");
// } else if (userRole === "viewer") {
//     console.log("Read-Only Access");
// } else if (userRole === "guest") {
//     console.log("Limited Access");
// } else {
//     console.log("Invalid role");
// }


// 60.  Determine the type of internet connection based on speed: 
// o <5 Mbps → Slow 
// o 5-50 Mbps → Normal 
// o 50-100 Mbps → Fast 
// o >100 Mbps → Ultra Fast

// var internetSpeed = 50;
// if (internetSpeed < 5) {
//     console.log("Slow");
// } else if (internetSpeed >= 5 && internetSpeed <= 50) {
//     console.log("Normal");
// } else if (internetSpeed > 50 && internetSpeed <= 100) {
//     console.log("Fast");
// } else {
//     console.log("Ultra Fast");
// }


// 61.  Check the weather category based on temperature: 
// o <0°C → Freezing 
// o 0-15°C → Cold 
// o 16-30°C → Warm 
// o 31-40°C → Hot 
// o >40°C → Extreme Heat

// var temperature = 25;
// if (temperature < 0) {
//     console.log("Freezing");
// } else if (temperature >= 0 && temperature <= 15) {
//     console.log("Cold");
// } else if (temperature >= 16 && temperature <= 30) {
//     console.log("Warm");
// } else if (temperature >= 31 && temperature <= 40) {
//     console.log("Hot");
// } else {
//     console.log("Extreme Heat");
// }


// 62.  Determine the type of shopping discount: 
// o <500 → No Discount 
// o 500-1000 → 5% Discount 
// o 1001-5000 → 10% Discount 
// o >5000 → 20% Discount

// var purchaseAmount = 1200;
// if (purchaseAmount < 500) {
//     console.log("No Discount");
// } else if (purchaseAmount >= 500 && purchaseAmount <= 1000) {
//     console.log("5% Discount");
// } else if (purchaseAmount >= 1001 && purchaseAmount <= 5000) {
//     console.log("10% Discount");
// } else {
//     console.log("20% Discount");
// }


// 63.  Check if an email belongs to a specific domain (@gmail.com, @yahoo.com, @outlook.com).
// var email = "abhishikththul9@gmail.com";
// if (email.endsWith("@gmail.com")) {
//     console.log("Email belongs to Gmail");
// } else if (email.endsWith("@yahoo.com")) {
//     console.log("Email belongs to Yahoo");
// } else if (email.endsWith("@outlook.com")) {
//     console.log("Email belongs to Outlook");
// } else {
//     console.log("Unknown domain");
// }


// 64.  Calculate the bus fare based on distance travelled: 
// o <5 km → ₹10 
// o 5-20 km → ₹20 
// o 20-50 km → ₹50 
// o >50 km → ₹100

// var distance = 30;
// if (distance < 5) {
//     console.log("Bus fare: ₹10");
// } else if (distance <= 20) {
//     console.log("Bus fare: ₹20");
// } else if (distance <= 50) {
//     console.log("Bus fare: ₹50");
// } else {
//     console.log("Bus fare: ₹100");
// }


// 65.  Check if a phone number is valid based on length and first digit (10 digits, starts with 6-9)
// var phoneNumber = "9876543210";
// if (phoneNumber.length === 10 && /^[6-9]\d{9}$/.test(phoneNumber)) {
//     console.log("Valid phone number");
// } else {
//     console.log("Invalid phone number");
// }


// 66.  Determine which mobile plan is best based on data usage: 
// o <2GB → Basic Plan 
// o 2-10GB → Standard Plan 
// o 10-50GB → Premium Plan 
// o >50GB → Unlimited Plan

// var dataUsage = 15;
// if (dataUsage < 2) {
//     console.log("Basic Plan");
// } else if (dataUsage >= 2 && dataUsage <= 10) {
//     console.log("Standard Plan");
// } else if (dataUsage > 10 && dataUsage <= 50) {
//     console.log("Premium Plan");
// } else {
//     console.log("Unlimited Plan");
// }


// 67.  Find the best mode of transport based on distance: 
// o <1 km → Walk 
// o 1-5 km → Bicycle 
// o 5-20 km → Bike 
// o 20-100 km → Car 
// o >100 km → Train/Flight

// var distance = 25;
// if (distance < 1) {
//     console.log("Walk");
// } else if (distance >= 1 && distance <= 5) {
//     console.log("Bicycle");
// } else if (distance > 5 && distance <= 20) {
//     console.log("Bike");
// } else if (distance > 20 && distance <= 100) {
//     console.log("Car");
// } else {
//     console.log("Train/Flight");
// }
