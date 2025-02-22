// square
// var n = 5;
// for (var i = 1; i < n; i++){
//     var row = "";
//     for (var j = 1; j < n; j++){
//         row += "* "
//     }
//     console.log(row);
// }


// border square
// var n = 4;
// for (var i = 0; i < n; i++){
//     var row = "";
//     for (var j = 0; j < n; j++){
//         if (i == 0 || i == n - 1 || j == 0 || j == n - 1){
//             row += "* "
//         }else{
//             row += "  "
//         }
//     }
//     console.log(row);
// }


// var n = 7;
// for (var i = 0; i < n; i++){
//     var row = "";
//     for (var j = 0; j < n; j++){
//         if (i == 0 || i == n - 1 || j == 0 || j == n - 1){
//             row += "a "
//         }else if (i == 1 || i == n - 2 || j == 1 || j == n - 2){
//             row += "b "
//         }else if (i == 2 || i == n - 3 || j == 2 || j == n - 3){
//             row += "c "
//         }else{
//             row += "d "
//         }
//     }
//     console.log(row);
// }



// var n = 7;
// for (var i = 0; i < n; i++){
//     var row = "";
//     for (var j = 0; j < n; j++){
//         if (i == 0 || i == n - 1 || j == 0 || j == n - 1){
//             row += "1 "
//         }else if (i == 1 || i == n - 2 || j == 1 || j == n - 2){
//             row += "2 "
//         }else if (i == 2 || i == n - 3 || j == 2 || j == n - 3){
//             row += "3 "
//         }else{
//             row += "4 "
//         }
//     }
//     console.log(row);
// }


var n = 7, i = 0;
while (i < n){
    var row = "";
    var j = 0;
    while (j < n){
        if (i == 0 || i == n - 1 || j == 0 || j == n - 1){
            row += "1 "
        }else if (i == 1 || i == n - 2 || j == 1 || j == n - 2){
            row += "2 "
        }else if (i == 2 || i == n - 3 || j == 2 || j == n - 3){
            row += "3 "
        }else{
            row += "4 "
        }
        j++;
    }
    console.log(row);
    i++;
}