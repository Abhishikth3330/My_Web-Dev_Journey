var n = 3;

for (var i = n; i >= 1; i--){
    var row = '';
    for (var j = 1; j <= n - i; j++){
        row += '  ';
    }
    for (var j = 1; j <= (2*i - 1); j++){
        row += '* ';
    }
    console.log(row);
}

for (var i = 2; i <= n; i++){
    var row = '';
    for (var j = 1; j <= n - i; j++){
        row += '  ';
    }
    for (var j = 1; j <= (2*i - 1); j++){
        row += '* ';
    }
    console.log(row);
}