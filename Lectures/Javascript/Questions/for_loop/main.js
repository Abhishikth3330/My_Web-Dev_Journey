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
