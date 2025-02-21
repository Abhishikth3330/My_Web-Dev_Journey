// var n = 5, i = 1;
// star = square
// while (i <= n){
//     j = 1;
//     var row = "";
//     while (j <= n){
//         row += "* ";
//         j++;
//     }
//     console.log(row);
//     i++;
// }


// console.log("\n");


// star = triangle
// var n = 5, i = 1;
// while (i <= n){
//     j = 1;
//     var row = "";
//     while (j <= i){
//         row += "* ";
//         j++;
//     }
//     console.log(row);
//     i++;
// }

// var n = 4, i = 1;
// while (i <= n){
//     j = n;
//     var row = "";
//     while (j >= i){
//         row += "* ";
//         j--;
//     }
//     console.log(row);
//     i++;
// }


// console.log("\n")

var n = 5; i = 1;

while (i <= n){
    var row = "";
    var j = 1;

    while (j <= n - i){
        row += "  ";
        j++;
    }

    var k = 1;
    while (k <= 2 * i - 1){
        row += "* "
        k++;
    }
    console.log(row);
    i++;
}


var n = 5;
var i = n - 1;

while (i >= 1){
    var row = "";
    var j = 1;

    while (j <= n - i){
        row += "  ";
        j++;
    }

    var k = 1;
    while (k <= 2 * i - 1){
        row += "* "
        k++;
    }
    console.log(row);
    i--;
}