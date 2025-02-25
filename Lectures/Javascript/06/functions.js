// sum
function sum(a, b){
    return a + b;
}

// subtract
function subtract(a, b){
    return a - b;
}

// multiplication
function multi(a, b){
    return a * b;
}

// division
function div(a, b){
    if (b == 0){
        console.log("Can not divide.");
    }else{
        return a / b;
    }
}

var a = 10, b = 5;
ans = div(a, b);
console.log(ans);