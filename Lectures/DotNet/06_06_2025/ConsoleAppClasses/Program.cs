using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppClasses
{

    //internal class Program
    //{ 
    //}



    //class Car
    //{
    //    // class members
    //    public string color = "red"; // fields


    //    // class methods
    //    static void Main(string[] args)
    //    {
    //        Car obj = new Car();
    //        Car obj2 = new Car();
    //        Console.WriteLine(obj.color);
    //        Console.WriteLine(obj2.color);
    //    }
    //}

    //class Car
    //{
    //    string color = "red";
    //    int year = 2010;

    //    static void Main()
    //    {
    //        Car car1 = new Car();
    //        Console.WriteLine($"My car color is {car1.color} and year: {car1.year}");
    //    }
    //}



    //class Car
    //{
    //    string color;
    //    int year;

    //    static void Main()
    //    {
    //        Car car1 = new Car();
    //        car1.color = "red";
    //        car1.year = 2010;
    //        Console.WriteLine($"My car color is {car1.color} and year: {car1.year}");
    //    }
    //}


    //class Car
    //{
    //    string model;
    //    string color;
    //    int year;

    //    static void Main()
    //    {
    //        Car car1 = new Car();
    //        car1.color = "red";
    //        car1.year = 2010;
    //        car1.model = "Dzire";
    //        Console.WriteLine($"My car model is {car1.model}, color is {car1.color} and year: {car1.year}");
    //    }
    //}


    class Car
    {
        string model;
        string color;
        int year;

        static void Main()
        {
            Car car1 = new Car();
            car1.color = "red";
            car1.year = 2010;
            car1.model = "Dzire";
            Console.WriteLine($"My car model is {car1.model}, color is {car1.color} and year: {car1.year}");
            
            
            Car car2 = new Car();
            car2.color = "white";
            car2.year = 2019;
            car2.model = "tiago";
            Console.WriteLine($"My car model is {car2.model}, color is {car2.color} and year: {car2.year}");


        }
    }


}
