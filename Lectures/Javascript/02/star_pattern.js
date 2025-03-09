// var i, t;
// for (i = 1; i <= 10; i++){
//     t = i * 2;
//     console.log(t)
// }


// * pattern
// square
var i, j;
for (i = 1; i <= 5; i++){
    var row = "";
    for (j = 1; j <= 5; j++){
        row += "* "
    }
    console.log(row)
}

console.log("\n");
// upper triangle
var i, j;
for (i = 1; i <= 5; i++){
    var row = "";
    for (j = 1; j <= i; j++){
        row += "* "
    }
    console.log(row)
}

console.log("\n");
// lower traingle
var i, j;
for (i = 1; i <= 5; i++){
    var row = "";
    for (j = 1; j <= 5 - i + 1; j++){
        row += "* "
    }
    console.log(row)
}

// Middle spaces (2 * (n - i))
for (let j = 1; j <= 2 * (n - i); j++) {
    row += "  ";
}

// Right triangle
for (let j = 1; j <= i; j++) {
    row += "* ";
}