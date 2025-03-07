// concate - joining 2 or more strings
a = "ABC";
b = "XYZ";
console.log(a.concat(" ", b));

c = "pqrs"
console.log(a.concat(" ", b, " ", c));


// repeat method
d = "qwerty";
console.log(d.repeat(3));

// replace method
e = "ascdssss";
console.log(e.replace('s', 'b'));
// replace All
console.log(e.replaceAll('s', 'b'))

// string indexOf method
console.log(e.indexOf('d'));
console.log(e.indexOf('s'));

// last index of
console.log(e.lastIndexOf('s'));


// search method - we can search an expression from the string
// var sentence = "Hello, World";
// var regex = /Hello/gi;
// console.log(sentence.search(','));

// match, matchAll and includes method
// console.log(sentence.match('W'));
// console.log(sentence.matchAll(regex));
// console.log(sentence.includes('W'));



// Updated sentence
const sentence = "Hello World";

// A regex pattern to match 'Hello' or 'World'
const regex = /Hello|World/g;

// Using matchAll directly
let results = sentence.matchAll(regex);

// Looping through the iterator and printing results
for (let result of results) {
  console.log(result);
}
