// poly means many and morphism means transforming one form into another\
// Polymorphism means the same function with different signatures is called many times
// Method Overriding : A child class overrides a method of its parent class
// Method Overloading (simulated) : A function behaves differently based on the number of type of its arguments

// Method Overriding
// A child class overrides a method of the parent class. The same method name performs different tasks

class Animal {
    speak() {
        console.log("Animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog Barks.");
    }
}

class Cat extends Animal {
    speak(){
        console.log("Cat Meows.");
    }
}

// const dog = new Dog();
// dog.speak();
// const cat = new Cat();
// cat.speak();


// Method Overloading (compile-time polymorphism)
class Calculator {
    add(a, b) {
        if (b === undefined){
            return a + a;
        }
        return a + b;
    }
}

// const calc = new Calculator();
// console.log(calc.add(2));
// console.log(calc.add(2, 3));