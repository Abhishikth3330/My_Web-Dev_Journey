﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    //class Program
    //{
    //    //// field
    //    //private string name; 

    //    //// property
    //    //public string Name
    //    //{
    //    //    get { return name; }
    //    //    set { name = value; }
    //    //}

    //    //static void Main(string[] args)
    //    //{
    //    //    Program myobj = new Program();
    //    //    myobj.Name = "John";
    //    //    Console.WriteLine(myobj.Name);
    //    //}


    //    //public string Name { get; set; }

    //    //static void Main(string[] args)
    //    //{
    //    //    Program myobj = new Program();
    //    //    myobj.Name = "John";
    //    //    Console.WriteLine(myobj.Name);
    //    //}

    //}



    // INHERITANCE

    // BASE CLASS
    //class Vehicle
    //{
    //    public string brand = "KIA"; // field

    //    public void honk() {
    //        Console.WriteLine("Tuu, Tuu");
    //    }
    //}

    //// CHILD CLASS - DERIVED CLASS
    //// (child class) : (parent class)
    //class Car : Vehicle
    //{
    //    public string modelName = "abc";
    //}



    // EXAMPLE - 2
    // FRUITS INHERITANCE

    //class Fruits
    //{
    //    public void taste()
    //    {
    //        Console.WriteLine("Fruits are sweet.");
    //    }
    //}

    //class Grape : Fruits
    //{
    //    public string color = "purple";
    //}

    //class Apple : Fruits
    //{
    //    public string color = "Red";
    //}




    //// Example - 3
    //class Abhi
    //{
    //    public string name = "My name is Abhishikth";
    //}

    //class MyAge : Abhi
    //{
    //    public int age = 23;
    //}



    //class Program
    //{
    //    static void Main(string[] args)
    //    {

    //        MyAge abhi = new MyAge();
    //        Console.WriteLine(abhi.name + " : " + abhi.age);



    //        Apple apple1 = new Apple();
    //        apple1.taste();
    //        Console.WriteLine(apple1.color);

    //        Grape grape1 = new Grape();
    //        grape1.taste();
    //        Console.WriteLine(grape1.color);


    //        //Car mycar = new Car();
    //        //mycar.honk();
    //        //Console.WriteLine(mycar.brand + " : " + mycar.modelName);
    //    }
    //}











    // POLYMORPHISM

    // base class
    //class Animal
    //{
    //    public void animalSound()
    //    {
    //        Console.WriteLine("the animal sound");
    //    }
    //}

    //class Cat : Animal
    //{
    //    public void animalSound()
    //    {
    //        Console.WriteLine("the cat say meow meow");
    //    }
    //}

    //class Dog : Animal
    //{
    //    public void animalSound()
    //    {
    //        Console.WriteLine("the dog says woof woof");
    //    }
    //}


    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        Animal myAnim = new Animal();
    //        Animal mycat = new Cat();
    //        Animal mydog = new Dog();

    //        myAnim.animalSound();
    //        mycat.animalSound();
    //        mydog.animalSound();

    //    }
    //}










    // ABSTRACTION

    // abstract class
    //abstract class Animal
    //{
    //    // abstract method
    //    public abstract void animalsound();
    //    public void sleep()
    //    {
    //        Console.WriteLine("Eepy animal...");
    //    }
    //}

    //class Cat : Animal
    //{
    //    public override void animalsound()
    //    {
    //        Console.WriteLine("Eepy Meow Meow...");
    //    }
    //}

    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        Cat cat1 = new Cat();
    //        cat1.animalsound();
    //        cat1.sleep();
    //    }
    //}





    // INTERFACE
    // interface are more like abstract but all in 
    // can define abstract method and propeties both

    interface Animal
    {
        void animalsound();
        //void anmimalcolor();
    }
    
    interface Animal1
    {
        //void animalsound();
        void anmimalcolor();
    }


    class Pig : Animal, Animal1
    {
        public void animalsound()
        {
            Console.WriteLine("the pig sound");
        }
        public void anmimalcolor()
        {
            Console.WriteLine("gray pig");
        }
    }


    class Cat : Animal
    {
        public void animalsound()
        {
            Console.WriteLine("the meow sound");
        }

        public void anmimalcolor()
        {
            Console.WriteLine("orange cat");
        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            Pig pig1 = new Pig();
            pig1.animalsound();
            pig1.anmimalcolor();

            Console.WriteLine();

            Cat cat1 = new Cat();
            cat1.animalsound();
            cat1.anmimalcolor();
        }
    }



}
