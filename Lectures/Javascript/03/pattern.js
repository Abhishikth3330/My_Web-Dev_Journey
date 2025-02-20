var n = 5;

for (var i = 1; i <=n; i ++){
    var row = "";
    for (var j = 1; j <= n - i; j++){
        row += "  ";
    }
    for (var k = 1; k <= 2*i - 1; k++){
        row += "* "
    }
    console.log(row);
}

var n = 5;

for (var i = n - 1; i >= 1; i--) {
    var row = "";
    for (var j = 1; j <= n - i; j++) {
        row += "  ";
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        row += "* ";
    }
    console.log(row);
}
