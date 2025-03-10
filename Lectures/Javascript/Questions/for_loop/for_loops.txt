// 1. Write a program to print numbers from 1 to 10 using a for loop.
// for (var i = 1; i <= 10; i++){
//     console.log(i);
// }


// 2. Print the even numbers between 1 and 20 using a for loop. 
// for(var i = 1; i <= 20; i++){
//     if (i%2 == 0){
//         console.log(i);
//     }
// }


// 3. Print the multiplication table of 5 using a for loop.
// for (var i = 1; i <= 10; i++){
//     console.log(5*i);
// }


// 4. Find the sum of the first 10 natural numbers using a for loop.
// var sum = 0;
// for (var i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(sum);


// 5. Print the square of numbers from 1 to 10 using a for loop.
// for (var i = 1; i <= 10; i++){
//     console.log(i*i);
// }


// 6. Write a program to reverse a given string using a for loop.
// var reverse_name = "ihba";
// var original_name = "";
// for (var i = reverse_name.length - 1; i >= 0; i--){
//     original_name += reverse_name[i]
// }
// console.log(original_name);


// 7. Count the number of vowels in a given string using a for loop.
// var vowels = "aeiouAEIOU";
// var count = 0;
// var sentence = "Abhishikth";
// for (var i = 0; i < sentence.length; i++){
//     if (vowels.includes(sentence[i])){
//         count++;
//     }
// }
// console.log("Number of Vowels : " + count);


// 8. Print the factorial of a given number using a for loop.
// var num = 5;
// var factorial = 1;
// for (var i = 1; i <= num; i++){
//     factorial *= i;
// }
// console.log(factorial);


// 9. Print Fibonacci series up to n terms using a for loop. 
// var n = 10;
// var a = 0, b = 1, c;
// for (var i = 1; i <= n; i++){
//     console.log(a);
//     c = a + b;
//     a = b;
//     b = c;
// }


// 10.  Find the largest number in an array using a for loop.
// var arr = [10, 25, 78, 43, 99, 5, 67];
// var largest = arr[0];
// for(var i = 1; i < arr.length; i++){
//     if (arr[i] > largest){
//         largest = arr[i];
//     }
// }
// console.log(largest);


// 11.  Write a program to check if a given number is a prime number using a for loop.
// var num = 29;
// var isPrime = true;
// if (num < 2){
//     isPrime = false;
// }else{
//     for (var i = 2; i < Math.sqrt(num); i++){
//         if (num % i == 0){
//             isPrime = false;
//             break;
//         }
//     }
// }
// if (isPrime){
//     console.log(num + " is a prime number");
// }else{
//     console.log(num + " is not a prime number");
// }


// 12.  Print all prime numbers between 1 and 50 using a for loop.
// for (let num = 2; num <= 50; num++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(num);
//     }
// }


// 13.  Write a program to count occurrences of a specific character in a string using a for loop.
// let str = "hello world";
// let charToFind = 'o';
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === charToFind) {
//         count++;
//     }
// }
// console.log(`The character '${charToFind}' appears ${count} times in the string.`);


// 14.  Write a program to print a right-angled triangle pattern using a for loop: 
// * 
// ** 
// *** 
// **** 
// ***** 

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let pattern = "";  
//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }
//     console.log(pattern);
// }


// 15.  Create a number pyramid using a for loop: 
//    1     
//   121    
//  12321   
// 1234321  

// var rows = 4;
// for (var i = 1; i <= rows; i++){
//     var pattern = "";
//     for (var j = 1; j <= rows - i; j++){
//         pattern += " ";
//     }
//     for (var j = 1; j <= i; j++){
//         pattern += j;
//     }
//     for(var j = i - 1; j >= 1; j--){
//         pattern += j;
//     }
//     console.log(pattern);
// }


// 1. Print all odd numbers between 1 and 50 using a for loop.
// for (var i = 1; i <= 50; i++){
//     if (i%2 != 0){
//         console.log(i);
//     }
// }


// 2. Write a program to print numbers from n to 1 using a for loop.
// n = 10;
// for (var i = n; i >= 1; i--){
//     console.log(i);
// }


// 3. Print the first n multiples of a given number.
// var num = 5;
// var n = 10;
// for (var i = 1; i <= n; i++){
//     console.log(num * i);
// }


// 4. Calculate the sum of all even numbers between 1 and 100.
// var sum = 0;
// for (var i = 2; i <= 100; i += 2){
//     sum += i;
// }
// console.log(sum);


// 5. Find the product of all numbers from 1 to n using a for loop.
// var n = 5;
// var product = 1;
// for (var i = 1; i <= n; i++){
//     product *= i;
// }
// console.log(product);


// 6. Reverse a number using a for loop (e.g., input: 1234, output: 4321).
// var num = 1234;
// var str_num = num.toString();
// var reversed_str = "";
// for (var i = str_num.length - 1; i >= 0; i--){
//     reversed_str += str_num[i];
// }
// var reversed_num = parseInt(reversed_str);
// console.log(reversed_num);


// 7. Count the number of digits in a given number using a for loop.
// var num = 12345;
// var count = 0;
// for (var i = num; i > 0; i = Math.floor(i/10)){
//     count++;
// }
// console.log(count);


// 8. Print the sum of digits of a number using a for loop.
// let num = 1234;
// let sum = 0;
// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     sum += i % 10;
// }
// console.log("Sum of digits:", sum);


// 9. Check if a number is an Armstrong number using a for loop (e.g., 153 = 1³ + 5³ + 3³). 
// let num = 153;
// let sum = 0;
// let temp = num;
// let digits = 0;
// // Count the number of digits
// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     digits++;
// }
// // Calculate the sum of each digit raised to the power of digits
// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     let digit = i % 10;
//     sum += Math.pow(digit, digits);
// }
// // Check if it's an Armstrong number
// if (sum === temp) {
//     console.log(num, "is an Armstrong number.");
// } else {
//     console.log(num, "is not an Armstrong number.");
// }



// 10.  Write a program to print the GCD (Greatest Common Divisor) of two numbers using a for loop.
// let a = 36;
// let b = 60;
// let gcd = 1;
// for (let i = 1; i <= Math.min(a, b); i++) {
//     if (a % i === 0 && b % i === 0) {
//         gcd = i;
//     }
// }
// console.log("GCD of", a, "and", b, "is:", gcd);



// 11.  Print all perfect numbers between 1 and 1000 using a for loop (A number is perfect if the sum of its factors, excluding itself, is equal to the number).
// for (let num = 1; num <= 1000; num++) {
//     let sum = 0;
//     // Find factors of num (excluding itself)
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     // Check if the sum of factors equals the number itself
//     if (sum === num) {
//         console.log(num, "is a perfect number");
//     }
// }


// 12.  Write a program to check if a number is palindrome using a for loop (e.g., 121 is a palindrome).
// var num = 121;
// var originalNum = num;
// var reversedNum = 0;
// for (var i = num; i > 0; i = Math.floor(i/10)){
//     var digit = i % 10;
//     reversedNum = reversedNum*10 + digit;
// }
// if (originalNum === reversedNum){
//     console.log(num, "is a palindrome.");
// }else{
//     console.log(num, "is not a palindrome.");
// }


// 13.  Write a program to generate a Floyd’s Triangle using a for loop: 
// 1   
// 2 3   
// 4 5 6   
// 7 8 9 10  

// var rows = 4;
// var num = 1;
// for (let i = 1; i <= rows; i++){
//     var rowOutput = "";
//     for (var j = 1; j <= i; j++){
//         rowOutput += num + " ";
//         num++;
//     }
//     console.log(rowOutput);
// }


// 14.  Generate the following pattern using a for loop: 
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 

// var rows = 4;
// var num = 1;
// for (let i = 1; i <= rows; i++){
//     var rowOutput = "";
//     for (var j = 1; j <= i; j++){
//         rowOutput += num + " ";
//         num++;
//     }
//     console.log(rowOutput);
// }



// 1. Print all multiples of 3 from 1 to 100 using a for loop.
// for (var i = 3; i <= 100; i += 3){
//     console.log(i);
// }


// 2. Write a program to print numbers in descending order from n to 1.
// var n = 10;
// for (var i = n; i >= 1; i--){
//     console.log(i);
// }



// 3. Print the ASCII values of characters from ‘A’ to ‘Z’ using a for loop. 
// for (var ch = 'A'.charCodeAt(0); ch <= 'Z'.charCodeAt(0); ch++){
//     console.log(String.fromCharCode(ch) + " : " + ch);
// }


// 4. Print the sum of the first n odd numbers.
// var n = 5;
// var sum = 0;
// var oddNumber = 1;
// for (var i = 1; i <= n; i++){
//     sum += oddNumber;
//     oddNumber += 2;
// }
// console.log(`Sum of first ${n} odd numbers is ${sum}`);



// 5. Find the sum of all numbers divisible by 5 between 1 and 100.
// var sum = 0;
// for (var i = 5; i <= 100; i += 5){
//     sum += i;
// }
// console.log(sum);


// 6. Print all prime factors of a given number using a for loop.
// var num = 60;
// console.log(`Prime factors of ${num} are : `);
// for (var i = 2; i <= num; i++){
//     while (num % i === 0){
//         console.log(i);
//         num /= i;
//     }
// }


// 7. Write a program to count the number of words in a string using a for loop. 
// let str = "Hello world, this is JavaScript";
// let count = 0;
// let inWord = false;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] !== ' ' && str[i] !== '\t' && str[i] !== '\n') {
//         if (!inWord) {
//             count++;
//             inWord = true;
//         }
//     } else {
//         inWord = false;
//     }
// }
// console.log("Number of words:", count);


// 8. Find the LCM (Least Common Multiple) of two numbers using a for loop. 
// let num1 = 12;
// let num2 = 18;
// let max = num1 > num2 ? num1 : num2;
// for (let lcm = max; ; lcm++) {
//     if (lcm % num1 === 0 && lcm % num2 === 0) {
//         console.log("LCM of", num1, "and", num2, "is:", lcm);
//         break;
//     }
// }



// 9. Print the reverse of an array using a for loop.
// let arr = [1, 2, 3, 4, 5];
// console.log("Reversed array:");
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }



// 11.  Find the sum of digits of all numbers from 1 to n using a for loop. 
// var n = 15;
// var totalSum = 0;
// for (var i = 1; i <= n; i++){
//     var num = i;
//     var sumOfDigits = 0;

//     while(num > 0){
//         sumOfDigits += num % 10;
//         num = Math.floor(num / 10);
//     }
//     totalSum += sumOfDigits;
// }
// console.log(totalSum);



// 12.  Convert a binary number to decimal using a for loop.
// var binary = "1101";
// var decimal = 0;
// var length = binary.length;
// for (var i = 0; i < length; i++){
//     var digit = parseInt(binary[i]);
//     decimal = decimal * 2 + digit;
// }
// console.log(decimal);



// 13.  Generate the Fibonacci sequence up to n terms using a for loop.
// var n = 10;
// var a = 0, b = 1;
// for (var i = 0; i < n; i++){
//     console.log(a);
//     var c = a+b;
//     a=b;
//     b = c;
// }


// 14.  Print all Armstrong numbers between 1 and 1000 using a for loop.
// for (var num = 1; num <= 1000; num++){
//     var sum = 0;
//     var temp = num;
//     var digits = num.toString().length;
//     while (temp > 0){
//         var digit = temp % 10;
//         sum += Math.pow(digit, digits);
//         temp = Math.floor(temp / 10);
//     }
//     if (sum === num){
//         console.log(num);
//     }
// }



// 15.  Find the smallest and largest number in a given list using a for loop.
// let numbers = [25, 78, 5, 89, 12, 44, 99, 3];
// var smallest = numbers[0];
// var largest = numbers[0];
// for (var i = 1; i < numbers.length; i++){
//     if (numbers[i] < smallest){
//         smallest = numbers[i];
//     }
//     if (numbers[i] > largest){
//         largest = numbers[i];
//     }
// }
// console.log(smallest);
// console.log(largest);



// 16.  Write a program to print a Hollow Square Pattern using a for loop: 
// ***** 
// *   * 
// *   * 
// ***** 

// var size = 5;
// for (var i = 0; i < size; i++){
//     let row = "";
//     for (let j = 0; j < size; j++){
//         if (i === 0 || i === size - 1 || j === 0 || j === size - 1){
//             row += "*";
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);
// }



// 17.  Generate a Diamond Pattern using a for loop: 
//    * 
//   *** 
//  ***** 
//   *** 
//    * 

// let n = 3;

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += "*";
//     }
//     console.log(row);
// }

// for (let i = n - 1; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += "*";
//     }
//     console.log(row);
// }



// 1. Print the following pattern using nested for loops: 
// ***** 
// ***** 
// ***** 
// *****

// for (var i = 1; i <= 4; i++){
//     var row = ""
//     for (var j = 1; j <= 5; j++){
//         row += "*";
//     }
//     console.log(row);    
// }



// 2. Print a right-angled triangle pattern: 
// * 
// ** 
// *** 
// **** 
// *****

// var i, j;
// for (i = 1; i <= 5; i++){
//     var row = "";
//     for (j = 1; j <= i; j++){
//         row += "* "
//     }
//     console.log(row)
// }



// 3. Print a square pattern with numbers: 
// 1111 
// 2222 
// 3333 
// 4444 


// var num = 1;
// for (var i = 1; i <= 4; i++){
//     var row = ""
//     for (var j = 1; j <= 4; j++){
//         row += num;
//     }
//     num++;
//     console.log(row);    
// }



// 4. Print a decreasing number triangle: 
// 55555 
// 4444 
// 333 
// 22 
// 1

// var num = 5;
// for (var i = 1; i <= 5; i++){
//     var row = "";
//     for (var j = 1; j <= 5 - i + 1; j++){
//         row += num;
//     }
//     num--;
//     console.log(row);    
// }


// 5. Print a multiplication table for numbers 1 to 5 using nested for loops. 
// for (var i = 1; i <= 5; i++){
//     console.log(`Multiplication table of ${i} : `);
//     for (var j = 1; j <= 10; j++){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
//     console.log("");
// }


// 6. Print a pyramid pattern: 
//    * 
//   *** 
//  ***** 
// ******* 

// var n = 5;
// for (var i = 1; i <=n; i ++){
//     var row = "";
//     for (var j = 1; j <= n - i; j++){
//         row += "  ";
//     }
//     for (var k = 1; k <= 2*i - 1; k++){
//         row += "* "
//     }
//     console.log(row);
// }


// 7. Print an inverted pyramid pattern: 
// ******* 
//  ***** 
//   *** 
//    * 

// var n = 5;
// for (var i = n - 1; i >= 1; i--){
//     var row = "";
//     for (var j = 1; j <= n-i; j++){
//         row += "  ";
//     }
//     for (var k = 1; k <= 2*i - 1; k++){
//         row += "* ";
//     }
//     console.log(row);    
// }


// 8. Print a Floyd’s triangle: 
//    1 
//   2 3 
//  4 5 6 
// 7 8 9 10

// let n = 4;
// let num = 1;

// for (let i = 1; i <= n; i++) {
//     let row = "";
    
//     // Loop to add spaces before numbers
//     for (let s = 1; s <= n - i; s++) {
//         row += " ";
//     }

//     // Loop to print numbers in each row
//     for (let j = 1; j <= i; j++) {
//         row += num + " ";
//         num++;
//     }

//     console.log(row);
// }



// 9. Print a hollow square pattern: 
// ***** 
// *   * 
// *   * 
// *****

// let n = 4;
// for (let i = 0; i < n; i++) {
//     let row = "";

//     for (let j = 0; j < n; j++) { 
//         if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }
//     console.log(row);
// }


// 10.  Print a number pyramid: 
//    1 
//   121 
//  12321 
// 1234321 

// let n = 4;
// for (let i = 1; i <= n; i++) { 
//     let row = "";
//     // Print spaces
//     for (let s = 1; s <= n - i; s++) {
//         row += " ";
//     }
//     // Print increasing numbers
//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }
//     // Print decreasing numbers
//     for (let j = i - 1; j >= 1; j--) {
//         row += j;
//     }
//     console.log(row);
// }


// 11.  Print a diamond pattern using nested for loops: 
//    * 
//   *** 
//  ***** 
// ******* 
//  ***** 
//   *** 
//    * 

// let n = 4;
// // Upper part of the diamond
// for (let i = 1; i <= n; i++) { 
//     let row = "";
//     // Print spaces
//     for (let s = 1; s <= n - i; s++) {
//         row += " ";
//     }
//     // Print stars
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// // Lower part of the diamond
// for (let i = n - 1; i >= 1; i--) { 
//     let row = "";
//     // Print spaces
//     for (let s = 1; s <= n - i; s++) {
//         row += " ";
//     }
//     // Print stars
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += "*";
//     }
//     console.log(row);
// }


// 12.  Print a checkerboard pattern using * and spaces: 
// *   *   * 
//   *   *   
// *   *   * 
//   *   *   

// let rows = 4;
// let cols = 5;
// for (let i = 0; i < rows; i++) {
//     let row = "";  
//     for (let j = 0; j < cols; j++) {
//         if ((i + j) % 2 === 0) {
//             row += "* ";
//         } else {
//             row += "  ";
//         }
//     }
//     console.log(row);
// }



// 13.  Print an hourglass pattern using nested for loops: 
// ******* 
//  ***** 
//   *** 
//    * 
//   *** 
//  ***** 
// *******

// var n = 4;
// for (var i = 0; i < n; i++){
//     var row = "";
//     for (var j = 0; j < i; j++){
//         row += " ";
//     }
//     for (var k = 0; k < (2 * (n-i) - 1); k++){
//         row += "*";
//     }
//     console.log(row);    
// }
// for (var i = n-2; i >= 0; i--){
//     var row = "";
//     for (var j = 0; j < i; j++){
//         row += " ";
//     }
//     for (var k = 0; k < (2 * (n - i) - 1); k++){
//         row += "*";
//     }
//     console.log(row);
// }



// 14.  Print an X-pattern using nested for loops: 
// *   * 
//  * * 
//   * 
//  * * 
// *   * 

// var n = 5;
// for (var i = 0; i < n; i++){
//     var row = "";
//     for (var j = 0; j < n; j++){
//         if (j === i || j === n-i-1){
//             row += "*";
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);    
// }


// 15.  Print a hollow diamond pattern using nested loops: 
//    * 
//   * * 
//  *   * 
// *     * 
//  *   * 
//   * * 
//    * 

// var n = 4;
// for (var i = 0; i < n; i++){
//     var row = "";
//     for (var j = 0; j < n-i-1; j++){
//         row += " ";
//     }
//     for (var j = 0; j < 2*i + 1; j++){
//         if (j===0 || j === 2*i){
//             row += "*";
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);
// }
// for (let i = n - 2; i >= 0; i--) {
//     let row = "";
//     for (let j = 0; j < n - i - 1; j++) {
//         row += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         if (j === 0 || j === 2 * i) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }
//     console.log(row);
// }



// 16.  Print the chessboard pattern using # and spaces: 
// # # # # 
// # # # # 
// # # # # 
// # # # # 

// var size = 4;
// for (var i = 0; i < size; i++){
//     var row = "";
//     for (var j = 0; j < size; j++){
//         if ((i+j) % 2 === 0){
//             row += "#";
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);
// }



// 1. Print the following square pattern: 
// ***** 
// ***** 
// ***** 
// *****

// var size = 4;
// for (var i = 0; i < size; i++){
//     var row = "";
//     for (var j = 0; j < size; j++){
//         row += "*";
//     }
//     console.log(row);
// }


// 2. Print a right-angled triangle pattern: 
// * 
// ** 
// *** 
// ****

// var size = 4;
// for (var i = 1; i <= size; i++){
//     var row = "";
//     for (var j = 1; j <= i; j++){
//         row += "*";
//     }
//     console.log(row);
// }


// 3. Print a reverse right-angled triangle pattern: 
// **** 
// *** 
// ** 
// *

// var size = 4;
// for (var i = size; i >= 1; i--){
//     var row = "";
//     for (var j = 1; j <= i; j++){
//         row += "*";
//     }
//     console.log(row);
// }


// 4. Print a hollow square pattern: 
// ***** 
// *   * 
// *   * 
// *****

// var size = 5;
// for (var i = 1; i <= size; i++){
//     var row = "";
//     for (var j = 1; j <= size; j++){
//         if (i === 1 || i === size || j === 1 || j === size){
//             row += "*";
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);
// }


// 5. Print a number pattern: 
// 1 
// 12 
// 123 
// 1234

// var rows = 4;
// for (var i = 1; i <= rows; i++){
//     var rowStr = "";
//     for (var j = 1; j <= i; j++){
//         rowStr += j;
//     }
//     console.log(rowStr);
// }


// 6. Print a pyramid pattern: 
//    * 
//   *** 
//  ***** 
// ******* 

// var n = 5;
// for (var i = 1; i <=n; i ++){
//     var row = "";
//     for (var j = 1; j <= n - i; j++){
//         row += "  ";
//     }
//     for (var k = 1; k <= 2*i - 1; k++){
//         row += "* "
//     }
//     console.log(row);
// }



// 7. Print a hollow pyramid pattern: 
//    * 
//   * * 
//  *   * 
// ******* 

// var n = 4;
// for (var i = 1; i <= n; i++){
//     var row = "";
//     for (var j = 1; j <= n-i; j++){
//         row += " ";
//     }
//     for (var k = 1; k <= 2*i - 1; k++){
//         if (k === 1 || k === 2*i - 1 || i === n){
//             row += "*";
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);    
// }


// 8. Print a diamond pattern: 
//    * 
//   *** 
//  ***** 
// ******* 
//  ***** 
//   *** 
//    * 

// var n = 4;
// for (var i = 1; i <= n; i++){
//     var row = "";
//     for (var j = 1; j <= n - i; j++){
//         row += " ";
//     }
//     for (var k = 1; k <= 2*i - 1; k++){
//         row += "*";
//     }
//     console.log(row);
// }

// for (var i = n-1; i >= 1; i--){
//     var row = "";
//     for (var j = 1; j <= n-i; j++){
//         row += " ";
//     }
//     for (var k = 1; k <= 2*i - 1; k++){
//         row += "*";
//     }
//     console.log(row);
// }


// 9. Print a number pyramid: 
//    1 
//   121 
//  12321 
// 1234321

// var n = 4;
// for (var i = 1; i <= n; i++) {
//     var row = "";
//     for (var j = 1; j <= n - i; j++) {
//         row += " ";
//     }
//     for (var k = 1; k <= i; k++) {
//         row += k;
//     }
//     for (var k = i - 1; k >= 1; k--) {
//         row += k;
//     }
//     console.log(row);
// }


// 10.  Print Floyd’s triangle: 
//    1 
//   2 3 
//  4 5 6 
// 7 8 9 10

// var n = 4;
// var num = 1;
// for (var i = 1; i <= n; i++) {
//     var row = "";
//     for (var j = 1; j <= n - i; j++) {
//         row += " ";
//     }
//     for (var k = 1; k <= i; k++) {
//         row += num + " ";
//         num++;
//     }
//     console.log(row);
// }


// 11.  Print Pascal’s Triangle up to n rows.

// function printPascalsTriangle(n) {
//     for (var i = 0; i < n; i++) {
//         var row = "";
//         for (var j = 0; j < n - i - 1; j++) {
//             row += "  ";
//         }
//         var num = 1;
//         for (var k = 0; k <= i; k++) {
//             row += num + "   ";
//             num = num * (i - k) / (k + 1);
//         }
//         console.log(row);
//     }
// }
// printPascalsTriangle(5);



// 12.  Print an hourglass pattern: 
// ******* 
//  ***** 
//   *** 
//    * 
//   *** 
//  ***** 
// ******* 

// var n = 4;
// for (var i = 0; i < n; i++) {
//     var row = "";
//     for (var j = 0; j < i; j++) {
//         row += " ";
//     }
//     for (var k = 0; k < 2 * (n - i) - 1; k++) {
//         row += "*";
//     }
//     console.log(row);
// }

// for (var i = n - 2; i >= 0; i--) {
//     var row = "";
//     for (var j = 0; j < i; j++) {
//         row += " ";
//     }
//     for (var k = 0; k < 2 * (n - i) - 1; k++) {
//         row += "*";
//     }
//     console.log(row);
// }



// 13.  Print an X-pattern: 
// *   * 
//  * * 
//   * 
//  * * 
// *   * 


// var n = 5;
// for (var i = 0; i < n; i++) {
//     var row = "";
//     for (var j = 0; j < n; j++) {
//         if (j == i || j == n - i - 1) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }
//     console.log(row);
// }



// 4.  Print a hollow diamond pattern: 
//    * 
//   * * 
//  *   * 
// *     * 
//  *   * 
//   * * 
//    * 


// var n = 4;
// for (var i = 1; i <= n; i++) {
//     var row = "";
//     for (var j = 1; j <= n - i; j++) {
//         row += " ";
//     }
//     for (var j = 1; j <= 2 * i - 1; j++) {
//         if (j == 1 || j == 2 * i - 1) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }
//     console.log(row);
// }
// for (var i = n - 1; i >= 1; i--) {
//     var row = "";
//     for (var j = 1; j <= n - i; j++) {
//         row += " ";
//     }
//     for (var j = 1; j <= 2 * i - 1; j++) {
//         if (j == 1 || j == 2 * i - 1) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }
//     console.log(row);
// }



// 15.  Generate a checkerboard pattern using * and spaces: 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * *

// var n = 5;
// for (var i = 1; i <= n; i++) {
//     var row = "";
//     for (var j = 1; j <= n; j++) {
//         if ((i + j) % 2 == 0) {
//             row += "* ";
//         } else {
//             row += "  ";
//         }
//     }
//     console.log(row);
// }



// 6.  Print Zig-Zag Pattern: 
// *       * 
// * *     * * 
// *   *   *   * 
// *     * *     * 

// var n = 4;
// var m = 9;
// for (var i = 0; i < n; i++) {
//     var row = "";
//     for (var j = 0; j < m; j++) {
//         if (j % (n - 1) == i || j % (n - 1) == (n - 1 - i)) {
//             row += "* ";
//         } else {
//             row += "  ";
//         }
//     }
//     console.log(row);
// }



// 17.  Find and print all prime numbers between 1 and 100 using nested loops. 
// for (var num = 2; num <= 100; num++) {
//     var isPrime = true;
//     for (var i = 2; i * i <= num; i++) { 
//         if (num % i == 0) {
//             isPrime = false;
//             break; 
//         }
//     }
//     if (isPrime) {
//         console.log(num);
//     }
// }


// 18.  Print a Chessboard Pattern using # and spaces: 
// # # # # 
// # # # # 
// # # # # 
// # # # # 

// var size = 4; 
// for (var i = 0; i < size; i++) {
//     var row = "";
//     for (var j = 0; j < size; j++) {
//         if ((i + j) % 2 == 0) {
//             row += "# ";
//         } else {
//             row += "  "; 
//         }
//     }
//     console.log(row);
// }


// 19.  Print the Hollow Butterfly Pattern: 
// *       * 
// **     ** 
// * *   * * 
// *  * *  * 
// *   *   * 
// *  * *  * 
// * *   * * 
// **     ** 
// *       * 

// var n = 5; 

// for (var i = 1; i <= n; i++) {
//     var row = "";

//     // Left part of the butterfly
//     for (var j = 1; j <= i; j++) {
//         if (j == 1 || j == i) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }

//     // Spaces in between
//     for (var j = 1; j <= (2 * (n - i)); j++) {
//         row += " ";
//     }

//     // Right part of the butterfly
//     for (var j = 1; j <= i; j++) {
//         if (j == 1 || j == i) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }

//     console.log(row);
// }

// // Lower half of the butterfly
// for (var i = n - 1; i >= 1; i--) {
//     var row = "";

//     // Left part of the butterfly
//     for (var j = 1; j <= i; j++) {
//         if (j == 1 || j == i) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }

//     // Spaces in between
//     for (var j = 1; j <= (2 * (n - i)); j++) {
//         row += " ";
//     }

//     // Right part of the butterfly
//     for (var j = 1; j <= i; j++) {
//         if (j == 1 || j == i) {
//             row += "*";
//         } else {
//             row += " ";
//         }
//     }

//     console.log(row);
// }



// 20.  Print an inverted hourglass pattern: 
// ******* 
//  *****   
//   ***   
//    *   
//   ***   
//  *****   
// *******


// var n = 4; 
// // Upper half of the hourglass
// for (var i = n; i >= 1; i--) {
//     var row = "";
//     for (var j = 1; j <= (n - i); j++) {
//         row += " ";
//     }
//     for (var j = 1; j <= (2 * i - 1); j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// // Lower half of the hourglass
// for (var i = 2; i <= n; i++) {
//     var row = "";
//     for (var j = 1; j <= (n - i); j++) {
//         row += " ";
//     }
//     for (var j = 1; j <= (2 * i - 1); j++) {
//         row += "*";
//     }
//     console.log(row);
// }
