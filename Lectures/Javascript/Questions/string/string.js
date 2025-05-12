// 1. Converts the entire string to lowercase.
// function lower_case(str){
//     return str.toLowerCase();
// }
// var str = "HELLO MY NAME IS ABHI...";
// console.log(lower_case(str));


// 2. Removes any extra spaces from the beginning and end.
// str = "    THIS IS A SENTENCE WITH     SPACES      .         ";
// console.log(str);
// console.log(str.trim());


// 3. Replaces all occurrences of the word "JavaScript" with "JS".
// var str = "JavaScript is Dynamic, JavaScript makes the website more funtional, and JavaScript is interesting to learn and work with.";
// console.log(str.replaceAll("JavaScript", "JS"));



// 4. Counts the number of words in the sentence and returns both the modified string and the word count.
// let str = "   JavaScript is awesome! I love JavaScript.   ";
// let modifiedStr = str.trim().toLowerCase().replaceAll("javascript", "js");
// console.log(modifiedStr);
// let wordCount = modifiedStr.split(/\s+/).length;
// console.log(wordCount);


// 5. Find the Length of a String
// var str = "JavaScript is Dynamic, JavaScript makes the website more funtional, and JavaScript is interesting to learn and work with.";
// console.log(str.length);


// 6. Convert a String to Uppercase & Lowercase
// var str = "JavaScript is Dynamic, JavaScript makes the website more funtional, and JavaScript is interesting to learn and work with.";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// 7. Write a function that extracts a specific part of a string using substring() or slice().
// function parts(str, start, end){
//     var sub_string = str.substring(start, end);
//     return sub_string
// }
// function parts_slice(str, start, end){
//     var slice_string = str.substring(start, end);
//     return slice_string;
// }
// var str = "JavaScript is Dynamic.";
// console.log(str.length);
// console.log(parts(str, 14, 21));
// console.log(parts_slice(str, 0, 10));



// 8. Reverse a String
// var str = "JavaScript";
// console.log(str.split("").reverse().join(""));


// 9. Check if a String is a Palindrome
// function isPalindrome(str){
//     var clean_string = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//     var reversed_str = clean_string.split("").reverse().join("");
//     return clean_string === reversed_str;
// }
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("Javascript"));



// 10.  Count the Number of Vowels in a String
// function countVowels(str){
//     var vowels = "aeiouAEIOU";
//     var count = 0;

//     for (var char of str){
//         if (vowels.includes(char)){
//             count++;
//         }        
//     }
//     return count;
// }
// console.log(countVowels("JavaScript is Dynamic"));



// 11.  Check if a String Starts or Ends with a Specific Word
// function checkStartEnd(str, word) {
//     return {
//         startsWith: str.startsWith(word),
//         endsWith: str.endsWith(word)
//     };
// }
// let str = "JavaScript is awesome";
// console.log(checkStartEnd(str, "JavaScript"));
// console.log(checkStartEnd(str, "awesome"));
// console.log(checkStartEnd(str, "is"));



// swap with a temp variable
function swapp(a, b){
    console.log(a, b);
    
    temp = a;
    a = b;
    b = temp;

    console.log(a, b);
    
    // return [a, b];
}
// swapp(10, 20);


// swap without a temp variable
function swapp2(a, b){
    console.log(a, b);

    a = a + b;
    b = a - b;
    a = a - b;

    console.log(a, b);
}
swapp2(10, 20);