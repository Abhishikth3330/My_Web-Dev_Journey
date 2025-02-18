/* var a = 10
console.log(a) */

var a = 10;
var b = 20;
var c = 30;
var d = 40;
var e = 50;

if (a > b || a > c || a > d || a > e){
    console.log("a")
}
else if (b > a || b > c || b > d || b > e){
    console.log("b")
}
else if (c > a || c > b || c > d || c > e){
    console.log("c")
}
else if (d > a || d > b || d > c || d > e){
    console.log("d")
}
else if (e > a || e > b || e > c || e > d)
{
    console.log("e")
}



var n = 2;
switch(n){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("None");
}