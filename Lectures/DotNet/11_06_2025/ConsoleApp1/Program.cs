using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    //internal class Program
    //{
    //}

    //class Car // create class
    //{
    //    //public string model; // create field

    //    //public Car(string model_name) // constructor
    //    //{
    //    //    //model = "KN";
    //    //    model = model_name;
    //    //}



    //    public string model; // create field
    //    public string color;
    //    public int year;

    //    public Car(string model_name, string model_color, int modelyear) // constructor
    //    {
    //        //model = "KN";
    //        model = model_name;
    //        color = model_color;
    //        year = modelyear;
    //    }

    //    static void Main(string[] args)
    //    {
    //        //Car car = new Car();
    //        Car car = new Car("KN", "Red", 1996);
    //        Console.WriteLine(car.model + car.color + car.year);
    //    }
    //}




    // access modifier - private, protected, public
    //class Car
    //{
    //    private string model = "KN";

    //    static void Main(string[] args)
    //    {
    //        Car car = new Car();
    //        Console.Write(car.model);
    //    }
    //}



    // example - 1

    //class Car
    //{
    //    public string car_brand;
    //    public int car_price;
    //    public Car(string brand, int price)
    //    {
    //        car_brand = brand;
    //        car_price = price;
    //    }
    //    static void Main(string[] args)
    //    {
    //        Car car = new Car("Buatti", 50000);
    //        Console.WriteLine($"Brand: {car.car_brand}");
    //        Console.WriteLine($"Price: {car.car_price}");
    //    }
    //}



    // get-set method
    class Person
    {
        //private string name;
        public string name;
        public string Name
        {
            get { return name; }
            set { name = value; }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Person myobj = new Person();
            myobj.Name = "Abhishikth";
            Console.WriteLine(myobj.Name);
        }
    }


}