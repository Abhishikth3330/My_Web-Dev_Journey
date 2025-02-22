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
