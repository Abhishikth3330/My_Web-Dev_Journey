// var i, t;
// for (i = 1; i <= 10; i++){
//     t = i * 2;
//     console.log(t)
// }


// * pattern

var i, j;
for (i = 1; i <= 5; i++){
    var row = "";
    for (j = 1; j <= 5; j++){
        row += "* "
    }
    console.log(row)
}

console.log("\n");

var i, j;
for (i = 1; i <= 5; i++){
    var row = "";
    for (j = 1; j <= i; j++){
        row += "* "
    }
    console.log(row)
}

console.log("\n");

var i, j;
for (i = 1; i <= 5; i++){
    var row = "";
    for (j = 1; j <= 5 - i + 1; j++){
        row += "* "
    }
    console.log(row)
}