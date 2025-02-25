// var i = 1;
// do{
//     console.log("Hello");
//     i++;
// }
// while(i <= 10)



// square do-while
// var n = 5;
// var i = 1;

// do {
//     var j = 1;
//     var row = "";
//     do{
//         row += "* ";
//         j++;
//     }while (j <= n)
//     console.log(row);
//     i++;
// }while(i <= n);


// right triangle do-while
// var n = 5;
// var i = 1;
// do {
//     var j = 1;
//     var row = "";
//     do{
//         row += "* ";
//         j++;
//     }while (j <= i)
//     console.log(row);
//     i++;
// }while(i <= n);



// left triangle do-while
// var n = 5;
// var i = 1;
// do {
//     var j = 1;
//     var row = "";
//     do{
//         row += "* ";
//         j++;
//     }while (j <= n - i + 1)
//     console.log(row);
//     i++;
// }while(i <= n);



// diamond star do-while
var n = 5; i = 1;
do{
    var row = "";
    var j = 0;
    do{
        row += " ";
        j++;
    }while(j <= n - i)
    
    var j = 0;
    do {
        row += "*";
        j++;
    }while(j < 2 * i - 1)
    
    console.log(row);
    i++;
}while(i <= n);

i = n - 1;
do{
    var row = "";
    var j = 0;
    do{
        row += " ";
        j++;
    }while(j <= n - i)
    
    var j = 0;
    do {
        row += "*";
        j++;
    }while(j < 2 * i - 1)
    
    console.log(row);
    i--;
}while(i >= 1);