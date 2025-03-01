function data(my_name, college){
    console.log(`My name is ${my_name} and my college name is ${college}`);
}

// var my_name = 'Abhi', college = 'GHRCE';
// data(my_name, college);

function sap(){
    return "Hello..."
}
// console.log(sap());

function info(name){
    return `${name}`
}
// var my_name = "Abhi"
// console.log(info(my_name));


// function add(a, b){
//     return a+b
// }
// console.log(add(6, 5))
// console.log(add(5, 5))
// console.log(add(6, 10))
// console.log(add(6, 7))

// Asynchronous Functions
let add = function(a, b){
    return a+b
}
// console.log(add(10, 5));

// Nested Function
function sap(n){
    function message(){
        console.log("Hello...", n);
    }
    return message();
}
// sap("welcome")

// function calculator(){
//     function add(a, b){
//         console.log(`Addition of ${a} & ${b} is ${a+b}`);
//     }
//     return add(10, 5);
// }
// calculator()

function calculator(value){
    function add(a, b){
        return a+b;
    }

    function subtract(a, b){
        return a - b;
    }

    function multi(a, b){
        return a * b;
    }

    function div(a, b){
        if (b == 0){
            console.log("Can not divide.");
        }else{
            return a / b;
        }
    }

    if(value == "add"){
        var ans = add(10, 5);
        console.log("Addition : " + ans);
    }else if(value == "sub"){
        var ans = subtract(10, 5);
        console.log("Subtraction : " + ans);
    }else if(value == "multi"){
        var ans = multi(10, 5);
        console.log("Multiplication : " + ans);
    }else{
        var ans = div(10, 5);
        console.log("Division : " + ans);
    }

}
// calculator("add");
// calculator("sub");
// calculator("multi");
// calculator("div");


// square of a number
let squa = function (i){
    return i*i;
}
// console.log(squa(3));


// even or odd
function evenOrOdd(num){
    return num % 2 == 0;
}
var ans = evenOrOdd(11);
console.log(ans);

