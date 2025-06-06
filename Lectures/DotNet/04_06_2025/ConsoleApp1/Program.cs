using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {

        //static void myMethod()
        //{
        //    Console.WriteLine("This method got executed !");
        //}



        //static void myMethod(string fname, int age)
        //{
        //    Console.WriteLine($"{fname} Kale, age: {age}");
        //}



        // method overloading
        // multiple methods within the same class with the same name but different parameters (either in number or type)

        //static int MethodInt(int x, int y)
        //{
        //    return (x + y);
        //}

        //static double MethodDouble(double x, double y)
        //{
        //    return (x + y);
        //    //return (int)(x + y);
        //}



        //static void argument_method_1(int num)
        //{
        //    Console.WriteLine($"Argument : {num}");
        //}

        //static void argument_method_2(int num1, int num2)
        //{
        //    Console.WriteLine($"Argument : {num1} and {num2}");
        //}





        static void Main(string[] args)
        {
            //myMethod();


            //myMethod("ABC", 12);
            //myMethod("DEF", 14);
            //myMethod("GHI", 11);
            //myMethod("JKL", 15);


            //int num1 = MethodInt(1, 2);
            //Console.WriteLine(num1);

            //double num2 = MethodDouble(1.3, 2.5);
            //Console.WriteLine(num2);


            //argument_method_1(100);
            //argument_method_2(100, 200);


            //int[] arr = { 10, 20, 30, 40, 50 };

            //for (int i = 0; i <= arr.Length - 1; i++)
            //{
            //    Console.WriteLine($"Element at index {i}: {arr[i]}");
            //}

            //int summ = 0;
            //for (int i = 0;i <= arr.Length - 1;i++)
            //{
            //    summ += arr[i];
            //}

            //Console.WriteLine();
            //Console.WriteLine($"Sum of all numbers : {summ}");







            // 05-06-2025

            // Example - 01
            // Print the reversed array
            // Reversed Array:
            //5
            //4
            //3
            //2
            //1

            //int[] arr = { 1, 2, 3, 4, 5};
            //Console.WriteLine("Reversed Array : ");

            //for (int i = arr.Length - 1; i >= 0; i--)
            //{
            //    Console.WriteLine(arr[i]);
            //}



            // Example - 02
            // Even numbers : 5
            // Odd numbers : 5
            // print this number using array

            //int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
            //int evenCount = 0;
            //int oddCount = 0;

            //for (int i = 0; i < arr.Length; i++)
            //{
            //    if (arr[i] % 2 == 0)
            //    {
            //        evenCount++;
            //    }else
            //    {
            //        oddCount++;
            //    }
            //}
            //Console.WriteLine($"Even numbers : {evenCount}");
            //Console.WriteLine($"Odd numbers : {oddCount}");



            // Example - 03

            // duplicate elements in an array
            // 4
            // 7
            // 2
            // define one array with duplicate numbers and in output it can not show duplicate values

            //int[] arr = { 4, 7, 2, 4, 2, 9, 7 };
            //Console.WriteLine("Duplicate elements in the array : ");

            //for (int i = 0; i < arr.Length; i++)
            //{
            //    for (int j = i + 1; j < arr.Length; j++)
            //    {
            //        if (arr[i] == arr[j])
            //        {
            //            Console.WriteLine(arr[i]);
            //            break;
            //        }
            //    }
            //}







        }
    }
}
