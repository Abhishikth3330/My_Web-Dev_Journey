using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World !");

            //string f_name = "Abhi";
            //string l_name = "Thul";
            //string full_name = f_name + " " + l_name;
            //Console.WriteLine("My name is " + f_name + " " + l_name);
            //Console.WriteLine("My name is " + full_name);


            //int num1 = 10;
            //int num2 = 20;
            //int num3 = 30;
            //Console.WriteLine(num1 + num2 + num3);


            //int x, y, z;
            //x = y = z = 15;
            //Console.WriteLine(x + y + z);


            //int x = 20;
            //Console.WriteLine(x);

            //int x, y, z;
            //x = 90;
            //y = 80;
            //z = 93;
            //Console.WriteLine("Marks for first object");
            //Console.WriteLine(x);                
            //Console.WriteLine(y);
            //Console.WriteLine(z);

            //int a, b, c;
            //a = 95;
            //b = 70;
            //c = 90;
            //Console.WriteLine("Marks for first object");
            //Console.WriteLine(a);
            //Console.WriteLine(b);
            //Console.WriteLine(c);


            //string name = "John Doe";
            //int age = 25;
            //double height = 1.75D;
            //bool is_student = true;
            //Console.WriteLine("Name: " + name);
            //Console.WriteLine("Age: " + age);
            //Console.WriteLine("Height: " + height);
            //Console.WriteLine("Is Student: " + is_student);



            // Task
            //char letter = 'G';
            //int a = 89;
            //short b = 56;
            //long c = 4564L;
            //float d = 3.733064F;
            //double e = 8.358674532D;
            //decimal f = 389.5M;

            //Console.WriteLine("Char: " + letter);
            //Console.WriteLine("Integer: " + a);
            //Console.WriteLine("Short: " + b);
            //Console.WriteLine("Long: " + c);
            //Console.WriteLine("Float: " + d);
            //Console.WriteLine("Double: " + e);
            //Console.WriteLine("Decimal: " + f);


            // Type Casting:
            // Implicit: Smallest datatype to largest
            // Explicit: Largest datatype to smallest
            //double my_double = 9.45;
            //Console.WriteLine(my_double);
            //int my_int = (int) my_double;
            //Console.WriteLine(my_int);


            // Task
            //int myInt = 10;
            //double myDouble = 5.25;
            //bool myBool = true;

            //Console.WriteLine(Convert.ToString(myInt)); // convert int to string
            //Console.WriteLine(Convert.ToDouble(myInt)); // convert int to double
            //Console.WriteLine(Convert.ToInt32((int)myDouble)); //  convert double to int
            //Console.WriteLine(Convert.ToString(myBool)); // convert boolean to string


            // Task
            //string a = "99.99";
            //Console.WriteLine(a);
            //Console.WriteLine(Convert.ToDouble(a));

            //double b = 88.9;
            //Console.WriteLine(b);
            //Console.WriteLine(Convert.ToString(b));


            //Console.Write("Enter your name: ");
            //string name = Console.ReadLine();
            //Console.Write("Name: " + name);

            //Console.Write("Enter your age: ");
            //int age = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("Age: " + age);





            // Day - 03 : Operators

            // Arithmatic operator => Addition, subtraction, multiplication, division, increment, decrement
            //int x = 100 + 50;
            //int y = x + 250;
            //int z = y + y;
            //Console.WriteLine(x);
            //Console.WriteLine(y);
            //Console.WriteLine(z);

            // increment & Decrement
            //int x = 5;
            //x--;
            //x++;
            //Console.WriteLine(x);


            //int x = 10;
            //x += 5;     // addition
            //x -= 5;     // subtraction
            //x >>= 5;    // x is greater than or equal to 5 symbol
            //x &= 5;     // checks x=10 AND x = 5
            //x *= 5;     // multiplication
            //Console.WriteLine(x);



            //int x = 5;
            //int y = 3;
            //Console.WriteLine(x > y);   // True
            //Console.WriteLine(x < y);   // False
            //Console.WriteLine(y == x);  // False
            //Console.WriteLine(x != y);  // True


            //int x = 5;
            //Console.WriteLine(x > 3 && x < 10);
            //Console.WriteLine(x < 3 && x > 10);
            //Console.WriteLine(x > 3 || x > 10);
            //Console.WriteLine(x < 3 || x < 10);


            //int x = 5;
            //Console.WriteLine(!(x < 3 || x > 10));


            // Example - 01
            //int a = 10, b = 5;
            //Console.WriteLine("Sum: " + (a + b));
            //Console.WriteLine("Difference: " + (a - b));
            //Console.WriteLine("Product: " + (a * b));
            //Console.WriteLine("Quotient: " + (a / b));
            //Console.WriteLine("Remainder: " + (a % b));

            //Console.WriteLine();

            //Console.WriteLine("A Before: " + a);
            //a += 5;
            //Console.WriteLine("A Before: " + a);

            //Console.WriteLine();

            //Console.WriteLine("B Before: " + b);
            //b *= 2;
            //Console.WriteLine("B Before: " + b);


            // Example - 02
            //int a = 12;
            //int b = 5;
            //Console.WriteLine("Addition (a+b): " + (a + b));
            //Console.WriteLine("Subtraction (a-b): " + (a - b));
            //Console.WriteLine("Multiplication (a*b): " + (a * b));
            //Console.WriteLine("Division (a/b): " + (a / b));
            //Console.WriteLine("Modulus (a%b): " + (a % b));



            // Example - 03
            //Console.Write("Enter a number: ");
            //// num = 8
            //int num = Convert.ToInt32(Console.ReadLine());

            //Console.WriteLine("Original x => " + num);
            //Console.WriteLine("After x += 5 => " + (num += 5));
            //Console.WriteLine("After x -= 2 => " + (num -= 2));
            //Console.WriteLine("After x *= 3 =>" + (num *= 3));
            //Console.WriteLine("After x /= 2 => " + (num /= 2));
            //Console.WriteLine("After x %= 4 => " + (num %= 4));


            //int x = 20;
            //int y = 10;
            //Console.WriteLine(x > y);



            // ternary operator
            //int x = 20, y = 10;
            //var result = x > y ? "x is greater than y" : "x is less than or equal to y";
            //Console.WriteLine(result);

        }
    }
}
