// 1. Check if a number is positive.
// var b = 10;
// if (b < 0){
//     console.log("The Number "+ b +" is Negative")
// }else{
//     console.log("The Number "+ b +" is Positive")
// }


// 2. Check if a number is greater than 100. 
// var num = 101;
// if (num > 100){
//     console.log("Number "+ num +" is greater than 100");
// }else{
//     console.log("Number is smaller than 100");
// }


// 3. Check if a person is eligible to vote (age >= 18).
// var age = 20;

// if (age >= 18){
//     console.log("You can Vote !")
// }else{
//     console.log("Noo")
// }


// 4. Check if a number is a multiple of 5. 
// var num = 45;
// if (num % 5 == 0) {
//     console.log("The number is a multiple of 5");
// }


// 5. Check if a given character is uppercase. 
// var letter = 'R';
// if (letter >= 'A' && letter <= 'Z'){
//     console.log("The letter is Uppercase");
// }


// 6. Check if a number is a two-digit number.
// var num = -47;
// if (num >= 10 && num < 100 || num <= -10 && num > -99){
//     console.log("The number is a two digit number");
// }


// 7. Check if a string contains the letter 'a'.
// var str = "abhishikth";
// if (str.includes('a')){
//     console.log("The string contains the letter 'a'.");
// }


// 8. Check if a person is a senior citizen (age >= 60).
// var age = 65;
// if (age >= 60){
//     console.log("The person is a Senior Citizen.");
// }


// 9. Check if a number is between 50 and 100.
// var num = 74;
// if (num >= 50 && num <= 100){
//     console.log("Number is between 50 and 100");
// }


// 10.  Check if a person can enter a club (age >= 21 and has a membership card).
// var person_age = 23;
// var person_membership = "YES";

// if (person_age >= 21 && person_membership){
//     console.log("Persone can enter the Club");
// }


// 11.  Check if a number is divisible by 3 or 7.
// var num = 63;
// if (num % 3 == 0 && num % 7 == 0){
//     console.log("Number is divisible by 3 and 7.");
// }


// 12.  Check if a person is eligible for a bank loan (age > 25 and salary > 30,000).
// var age = 27;
// var salary = 38000;

// if (age > 25 && salary > 30000) {
//     console.log("Person eligible for Loan");
// }


// 13.  Check if a user has admin access (role === "admin").
// var role = "admin"
// if (role == "admin"){
//     console.log("Admin Access.")
// }


// 14.  Check if a product is available in stock (stock > 0).
// var stock = 41;
// if (stock > 0){
//     console.log("Product Available.")
// }


// 15.  Check if a given year is a century year (ends with 00). 
// var year = 2000;
// if (year % 100 === 0){
//     console.log("The year is a century year.")
// }


// 16.  Check if a number is zero.
// var number = 0;
// if (number == 0){
//     console.log("The number is zero.")
// }


// 17.  Check if a person is a teenager (age between 13 and 19).
// var age = 17;
// if (age >= 13 && age <= 19){
//     console.log("The person is a teenager.");
// }


// 18.  Check if a number is less than 100 and even.
// var number = 56;
// if (number <= 100 && number % 2 == 0){
//     console.log("The number is less than 100 and even.");
// }


// 19.  Check if a string is empty.
// var empty = "";
// if (empty == ""){
//     console.log("Empty String.");
// }


// 20.  Check if a number is a perfect square.
// var num = 25;
// var sqrt = Math.sqrt(num);
// if (sqrt === Math.floor(sqrt)){
//     console.log("The number is a perfect square");
// }


// 21.  Check if a number ends with the digit 5
// var number = 625;
// if (number % 10 == 5){
//     console.log("Number ends with digit 5.");
// }


// 22.  Check if a person is eligible for a discount (if age < 12 or > 60).
// var age = 23;
// if (age > 12 || age < 60){
//     console.log("Eligible for a discount");
// }


// 23.  Check if a string starts with the letter "A".
// var sentence = "Abhishikth"
// if (sentence.startsWith('A')){
//     console.log("Starts with letter 'A'.");
// }


// 24.  Check if a number is a palindrome (same when reversed).
// var str1 = "121";
// var rev = "";
// for (var i = str1.length - 1; i >= 0; i--){
//     rev += str1[i];
// }
// if (str1 == rev){
//     console.log("number is palindrome");
// }

// 25.  Check if a number is a prime number.
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


// 26.  Check if a given string is a valid email address (contains '@' and '.').
// var email = "abhishikththul9@gmail.com"
// if (email.includes('@' && '.')){
//     console.log("Valid Email Address.");
// }


// 27.  Check if a person is eligible for a scholarship (marks > 85 and income < 5L).
// var income = 420000;
// if (income > 85000 && income < 500000){
//     console.log("Eligible for scholarship.");
// }


// 28.  Check if a mobile number is 10 digits long.
// var mobile = 7865490873;
// if (mobile.toString().length == 10){
//     console.log("mobile number has 10 digits");
// }


// 29.  Check if a password is strong (length > 8 and contains a special character).
// var password = "Sampras@123";
// if (password.toString().length > 8){
//     console.log("Password is strong.");
// }


// 30.  Check if a number is positive, and print "Positive" if true.
// var number = 23;
// if (number > 0){
//     console.log("Positive");
// }


// 31.  Check if a user has entered the correct password ("admin123").
// var password = "admin123";
// var user_password = "admin123";
// if (password == user_password){
//     console.log("Correct Password.");
// }


// 32.  Check if a given letter is lowercase.
// var letter = 'c';
// if (letter > 'a' && letter < 'z'){
//     console.log("Lowercase");
// }


// 33.  Check if a number is greater than 500.
// var num = 505;
// if (num > 500){
//     console.log("Greater than 500.");
// }


// 34.  Check if a number is exactly 50.
// var num = 50;
// if (num = 50){
//     console.log("Number is exactly 50.");
// }


// 35.  Check if the first digit of a number is even.
// var num = 246;
// var firstDigit = num.toString()[0];
// if (firstDigit % 2 == 0){
//     console.log("First digit is even");
// }


// 36.  Check if the last digit of a number is 0. 
// var number = 2020;
// var lastDigit = number % 10;
// if (lastDigit == 0){
//     console.log("last digit is zero");
// }


// 37.  Check if a person can get a driving license (age >= 18 and has passed the test).
// var age = 19;
// var test = "passed";
// if (age >= 18 && test == "passed"){
//     console.log("person can get a driving license.");
// }


// 38.  Check if the length of a string is greater than 10.
// var sentence = "I am Abhishikth Thul";
// var lengthSentence = sentence.toString().length;
// if (lengthSentence > 10){
//     console.log("Length of the string is greater than 10.");
// }


// 39.  Check if the given temperature is above boiling point (100°C).
// var temp = 120;
// if (temp > 100){
//     console.log("Above boiling point.");
// }


// 40.  Check if a triangle is isosceles (two sides equal).
// var a = 5, b = 5, c = 8;
// if (a === b || b === c || c === a){
//     console.log("Isosceles Triangle.");
// }


// 41.  Check if a word is a palindrome ("madam" → palindrome).
// var word = "madam";
// var reversed = word.split("").reverse().join("");
// if (word === reversed){
//     console.log("palindrome.");
// }


// 42.  Check if an online order is eligible for free shipping (total price >= ₹500)
// var price = 600;
// if (price >= 500){
//     console.log("order is eligible for free shipping.");
// }


// 43.  Check if a date falls on a weekend (Saturday or Sunday)
// var date = new Date("2025-02-22");
// var reference = new Date("1970-01-04");
// var diff = (date - reference) / (1000 * 60 * 60 * 24);

// if (diff % 7 === 0 || diff % 7 === 6) 
//     console.log("Weekend");


// 44.  Check if a person is eligible for a cashback offer (purchase > ₹1000 and payment via credit card).
// var purchase = 1200;
// var mode = "credit_card";
// if (purchase > 1000 && mode === "credit_card"){
//     console.log("Eligible for a cashback.");
// }


// 45.  Check if a person qualifies for a credit card (age > 21 and credit score > 700).
// var age = 27;
// var score = 800;
// if (age > 21 && score > 700){
//     console.log("qualifies for a credit card.");
// }


// 46.  Check if an ATM withdrawal amount is a multiple of ₹100.
// var amount = 15000;
// if (amount % 100 == 0){
//     console.log("amount is multiple of 100.");
// }


// 47.  Check if a person is eligible for a work-from-home policy (role = "developer" or "manager")
// var role = "developer";
// if (role == "developer" || role == "manager"){
//     console.log("Eligible for work form home.");
// }


// 48.  Check if an email address belongs to a specific domain (ends with "@gmail.com").
// var email = "abhishikththul9@gmail.com"
// if (email.endsWith("@gmail.com")){
//     console.log("belongs to gmail.com domain");
// }


// 49.  Check if a user can access premium content (logged in & has active subscription)
// var logged_in = "True";
// var subscription = "active";
// if (logged_in === "True" && subscription === "active"){
//     console.log("Access to Premium Content.");
// }