// WAP to print addition of 1 to 10 no. using for loop

// var sum = 0
// for (var i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(sum);



// WAP to print series 2 5 4 10 6 15 8 20 10 25

// var a = 2;
// var b = 5;
// for (var i = 0; i <= 5; i++){
//     console.log(a);
//     console.log(b);
//     a += 2;
//     b *= 2; 
// }



// factorial of 5

// var n = 5;
// ans = 1
// for (var i = 1; i <= n; i++){
//     ans *= i;    
// }
// console.log(ans);



// print using for loop
// A B C
// D E F
// G H I

// var i, j, letter = 65;
// for (i = 0; i < 3; i++){
//     var row = "";
//     for (j = 0; j < 3; j++){
//         row += String.fromCharCode(letter) + "  ";
//         letter++;
//     }
//     console.log(row)
// }



// reverse of previous

// var i, j, letter = 74;
// for (i = 0; i < 3; i++){
//     var row = "";
//     for (j = 0; j < 3; j++){
//         row += String.fromCharCode(letter) + "  ";
//         letter--;
//     }
//     console.log(row)
// }



// A O O
// O B O
// O O C

// var i, j, letter = 65;
// for (i = 0; i < 3; i++){
//     var row = "";
//     for (j = 0; j < 3; j++){
//         if (i == j){
//             row += String.fromCharCode(letter) + "  ";
//             letter++;
//         }else{
//             row += "O  ";
//         }
//     }
//     console.log(row)
// }


// 10
// 9 8
// 7 6 5
// 4 3 2 1

// var i, j, num = 10;
// for (i = 1; i <= num; i++){
//     var row = "";
//     for (j = 1; j <= i; j++){
//         row += num + "  ";
//         num--;
//     }
//     console.log(row)
// }



// 1  
// 2  3  
// 4  5  6  
// 7  8  9  10 

// var i, j, num = 1;
// for (i = 1; i <= 4; i++){
//     var row = "";
//     for (j = 1; j <= i; j++){
//         row += num + "  ";
//         num++;
//     }
//     console.log(row)
// }


// 1
// 121
// 12321
// 121
//  1

// var n = 3;

// for (var i = 1; i <= n; i ++){
//     var row = "";
//     for (var j = 1; j <= n - i; j++){
//         row += " ";
//     }
//     for (var j = 1; j <= i; j++){
//         row += j;
//     }
//     for (var j = i-1; j >= 1; j--){
//         row += j;
//     }
//     console.log(row);
// }

// for (var i = n - 1; i >= 1; i--){
//     var row = "";
//     for (var j = 1; j <= n - i; j++){
//         row += " ";
//     }
//     for (var j = 1; j <= i; j++){
//         row += j;
//     }
//     for (var j = i-1; j >= 1; j--){
//         row += j;
//     }
//     console.log(row);
// }