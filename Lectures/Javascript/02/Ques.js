// Odd or Even
var a = 2;

if(a % 2 == 0){
    console.log("The number " + a + " is Even")
}else{
    console.log("The number is Odd")
}


// Positive-Negative
var b = 10;
if (b < 0){
    console.log("The Number "+ b +" is Negative")
}else{
    console.log("The Number "+ b +" is Positive")
}


// Leap Year
var year = 2022
if (year % 4 == 0){
    console.log("The year "+ year +" is Leap Year")
}else{
    console.log("The year "+ year +" is Non-Leap Year")
}

// swapping
var a = 100, b = 20;
console.log(a + " and " + b)
if (a > b){
    var temp = a;
    a = b;
    b = temp;
}else{
    console.log("No Swap !")
}
console.log(a + " and " + b)


// voting
var age = 20;

if (age >= 18){
    console.log("You can Vote !")
}else{
    console.log("Noo")
}


// pass or fail
var marks = 10;
if (marks >= 35){
    console.log("Passed")
}else{
    console.log("Detained")
}

// sum of marks and percentage

var maths = 80, science = 70, english = 66, hindi = 88, social = 50;
var sum = maths + science + english + hindi + social;

var percentage = (sum / 5);

console.log(percentage);