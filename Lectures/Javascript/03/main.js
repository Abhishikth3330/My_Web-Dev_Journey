var i, j, n = 5;
for (i = 1; i <= n; i++){
    var row = "";
    for (j = 1; j <= i; j++){
        row += "* ";
    }
    for (j = 1; j <= 2 * (n - i); j++){
        row += " ";
    }
    for (j = 2*n; j <= 2*n + i; j--){
        row += "* ";
    }
    console.log(row);
}

// for (i = 1; i <= 2*5 - i; i++){
//     var row = "";
//     for (j = 1; j <= i; j++){
//         row += "* "
//     }
//     console.log(row)
// }

// for (i = 1; i <= 4; i++){
//     var row = "";
//     for (j = 1; j <= 4 - i + 1; j++){
//         row += "* "
//     }
//     console.log(row)
// }



// for (i = 1; i <= 4; i++){
//     var row = "";
//     for (j = 1; j <= 4 - i + 1; j++){
//         row += "* "
//     }
//     console.log(row)
// }



// var i, j;
// for (i = 1; i <= 5; i++){
//     var row = "";
//     for (j = 1; j <= i; j++){
//         row += "* "
//     }
//     console.log(row)
// }


// var i, j;
// for (i = 1; i <= 4; i++){
//     var row = "";
//     for (j = 1; j <= 4 - i + 1; j++){
//         row += "* "
//     }
//     console.log(row);
// }