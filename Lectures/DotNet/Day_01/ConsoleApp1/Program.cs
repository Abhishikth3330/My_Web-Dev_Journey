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







            // Day - 04

            // Math Function

            //Console.WriteLine(Math.Max(5, 10));
            //Console.WriteLine(Math.Min(5, 10));

            //Console.WriteLine(Math.Sqrt(64)); // Square Root


            //Console.WriteLine(Math.Abs(-10)); // absolute value

            //Console.WriteLine(Math.Round(5.55)); // round the value 



            // Strings in C#

            //string str1 = "Hello";
            //string str2 = "I am C#";

            //Console.WriteLine(str1);
            //Console.WriteLine(str2);


            // length of a string

            //string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            //Console.WriteLine("Total Alphabets : " + txt.Length);

            //Console.WriteLine(txt.ToLower());     //Convert string to lowercase
            //Console.WriteLine(txt.ToUpper());     //Convert string to uppercase


            //string str1 = "Hello";
            //string str2 = "World";
            //string name1 = str1 + str2;
            //string name2 = string.Concat(str1, str2);
            //Console.WriteLine(name2);


            // interpolation - using variables as a placeholder

            //string str1 = "Hello";
            //string str2 = "World";
            //string name = $"My name is: {str2}, {str1}";
            //Console.WriteLine(name);


            // accessing a character from a string

            //string str1 = "Hello";
            //Console.WriteLine(str1[0]);
            //Console.WriteLine(str1[1]);
            //Console.WriteLine(str1[2]);
            //Console.WriteLine(str1[3]);
            //Console.WriteLine(str1[4]);

            //Console.WriteLine(str1.IndexOf('e'));
            //Console.WriteLine(str1.IndexOf('o'));


            // \'\' OR \"\" this will give you string in '' or "" in string output
            //string txt = " We are the so called \"vikings\" from the north.";
            //Console.WriteLine(txt);


            // \' will get you an apostophy s
            //string txt = "It\'s alright.";
            //Console.WriteLine(txt);


            // tab space
            //string txt = "Hello\tWorld!";
            //Console.WriteLine(txt);

            // next line
            //string txt = "Hello\nWorld!";
            //Console.WriteLine(txt);

            // backspace
            //string txt = "Hell\bo World!";
            //Console.WriteLine(txt);


            // IF - ELSE BLOCK

            // example - 1
            //int x = 20;
            //int y = 10;
            //if (x > y)
            //{
            //    Console.WriteLine("X is greater than Y");
            //}


            // Example - 2
            //int time = 20;
            //if (time < 18)
            //{
            //    Console.WriteLine("Good Day");
            //}
            //else
            //{
            //    Console.WriteLine("Good Evening");
            //}



            // Example - 3
            //int time = 20;
            //if (time < 11)
            //{
            //    Console.WriteLine("Good Morning");
            //}
            //else if (time < 19){
            //    Console.WriteLine("Good Day");
            //}
            //else
            //{
            //    Console.WriteLine("Good Evening");
            //}


            // Example - 4
            //int time = 20;
            //string result = (time < 18) ? "Good Day." : "Good Evening";
            //Console.WriteLine(result);


            // find the greatest of 3 numbers

            //int num1 = 10;
            //int num2 = 20;
            //int num3 = 30;


            //if (num1 >= num2 && num1 >= num3)
            //{
            //    Console.WriteLine($"{num1} is greatest number.");
            //}
            //else if (num2 >= num1 && num2 >= num3)
            //{
            //    Console.WriteLine($"{num2} is greatest number.");
            //}
            //else
            //{
            //    Console.WriteLine($"{num3} is greatest number.");
            //}


            // find the greatest of 4 numbers
            //int num1 = 10;
            //int num2 = 20;
            //int num3 = 30;
            //int num4 = 40;

            //if (num1 >= num2 && num1 >= num3 && num1 >= num4)
            //{
            //    Console.WriteLine($"{num1} is the greatest number.");
            //}
            //else if (num2 >= num1 && num2 >= num3 && num2 >= num4)
            //{
            //    Console.WriteLine($"{num2} is the greatest number.");
            //}
            //else if (num3 >= num1 && num3 >= num2 && num3 >= num4)
            //{
            //    Console.WriteLine($"{num3} is the greatest number.");
            //}
            //else
            //{
            //    Console.WriteLine($"{num4} is the greatest number.");
            //}


            // Grading marks
            //int marks = 88;

            //if (marks >= 90)
            //{
            //    Console.WriteLine("Grade A");
            //}
            //else if (marks >= 75 && marks <= 89)
            //{
            //    Console.WriteLine("Grade B");
            //}
            //else if (marks >= 50 && marks <= 74)
            //{
            //    Console.WriteLine("Grade C");
            //}
            //else
            //{
            //    Console.WriteLine("Grade D");
            //}








            // 30/05/2025

            // switch statements


            // Example - 01
            //int day = 4;
            //switch(day)
            //{
            //    case 1:
            //        Console.WriteLine("Monday");
            //        break;
            //    case 2:
            //        Console.WriteLine("Tuesday");
            //        break;
            //    case 3:
            //        Console.WriteLine("Wednesday");
            //        break;
            //    case 4:
            //        Console.WriteLine("Thursday");
            //        break;
            //    case 5:
            //        Console.WriteLine("Friday");
            //        break;
            //    case 6:
            //        Console.WriteLine("Saturday");
            //        break;
            //    case 7:
            //        Console.WriteLine("Sunday");
            //        break;
            //}


            // Example - 02 ==> if case doesn't match then default will get executed
            //int day = 4;
            //switch (day)
            //{
            //    case 6:
            //        Console.WriteLine("Saturday");
            //        break;
            //    case 7:
            //        Console.WriteLine("Sunday");
            //        break;
            //    default:
            //        Console.WriteLine("Looking forward to the next week");
            //        break;
            //}



            // WHILE LOOP
            //int i = 0;
            //while (i < 5)
            //{
            //    Console.WriteLine(i);
            //    i++;
            //}


            // DO WHILE LOOP
            //int i = 0;
            //do
            //{
            //    Console.WriteLine(i);
            //    i++;
            //}
            //while (i < 5);


            // print even numbers between 1 to 10
            //int i = 1;
            //while (i <= 10)
            //{
            //    if (i % 2 == 0)
            //    {
            //        Console.WriteLine(i);
            //    }
            //    i++;
            //}


            // print odd numbers between 1 to 10
            //int i = 1;
            //while (i <= 10)
            //{
            //    if (i % 2 != 0)
            //    {
            //        Console.WriteLine(i);
            //    }
            //    i++;
            //}



            // FOR LOOP
            //for (int i = 0; i < 5; i++)
            //{
            //    //Console.WriteLine(i);
            //    Console.WriteLine("Hello");
            //}


            // Table of 2
            //for (int i = 1; i <= 10; i++)
            //{
            //    Console.WriteLine(i * 2);
            //}


            // factorial of a number
            //int fact = 1;
            //int num = 5;
            //for (int i = 1; i <= num; i++)
            //{
            //    //fact = fact * i;
            //    fact *= i;
            //}
            //Console.WriteLine(fact);




            // Armstrong Number
            //int number = 153;
            //int original = number;
            //int sum = 0;
            //while (number > 0)
            //{
            //    int digit = number % 10;
            //    sum += digit * digit * digit;
            //    number /= 10;
            //}
            //if (sum == original)
            //{
            //    Console.WriteLine($"{original} is an Armstrong number.");
            //}
            //else
            //{
            //    Console.WriteLine($"{original} is not an Armstrong number.");
            //}



            // Leap Year

            //int year = 2024;
            //if ((year % 4 == 0 && year % 100 != 0))
            //{
            //    Console.WriteLine($"{year} is a leap year.");
            //}
            //else
            //{
            //    Console.WriteLine($"{year} is not a leap year.");
            //}




            // Reverse the given number using while loop (8421 to 1248)

            //int number = 8421;
            //int reverse = 0;
            //while (number > 0)
            //{
            //    int digit = number % 10;
            //    reverse = reverse * 10 + digit;
            //    number = number / 10;
            //}
            //Console.WriteLine($"Reversed number is: {reverse}");



            // Check if a number is palindrom such as 2442

            //int number = 2442;
            //int original = number;
            //int reverse = 0;
            //while (number > 0)
            //{
            //    int digit = number % 10;
            //    reverse = reverse * 10 + digit;
            //    number = number / 10;
            //}
            //if (original == reverse)
            //{
            //    Console.WriteLine($"{original} is a palindrome.");
            //}
            //else
            //{
            //    Console.WriteLine($"{original} is not a palindrome.");
            //}









            // 31/05/2025


            // SQUARE PATTERN
            //for (int i = 0; i < 3;  i++)
            //{
            //    for (int j = 0; j < 3; j++)
            //    {
            //        Console.Write('*');
            //    }
            //    Console.WriteLine();
            //}


            // SQUARE NUMBER PATTERN
            //for (int i = 0; i < 5;  i++)
            //{
            //    for(int j = 0; j < 5; j++)
            //    {
            //        Console.Write(i);
            //    }
            //    Console.WriteLine();
            //}


            // alphabets square pattern
            //int c = 0;
            //for (char i = 'a'; i <= 'z';  i++)
            //{
            //    Console.Write(" " + i);
            //    c++;
            //    if (c % 4 == 0)
            //    {
            //        Console.WriteLine();
            //    }
            //}


            //int c = 0;
            //for (char i = 'z'; i >= 'a';  i--)
            //{
            //    Console.Write(" " + i);
            //    c++;
            //    if (c % 4 == 0)
            //    {
            //        Console.WriteLine();
            //    }
            //}


            // right traingle pattern
            //for (int i = 1; i <= 5; i++)
            //{
            //    for (int j = 1; j <= i; j++)
            //    {
            //        Console.Write('*');
            //    }
            //    Console.WriteLine();
            //}




            // BREAK - CONTINUE STATEMENT

            //for (int i = 0; i < 10; i++)
            //{
            //    if (i == 4)
            //    {
            //        break;
            //    }
            //    Console.WriteLine(i);
            //}


            //for (int i = 0; i < 10; i++)
            //{
            //    if (i == 4)
            //    {
            //        continue;
            //    }
            //    Console.WriteLine(i);
            //}


            //int i = 0;
            //while (i < 10)
            //{
            //    Console.WriteLine(i);
            //    i++;
            //    if (i == 4)
            //    {
            //        break;
            //    }
            //}


            //int i = 0;
            //while (i < 10)
            //{
            //    Console.WriteLine(i);
            //    i++;
            //    if (i == 4)
            //    {
            //        continue;
            //    }
            //}



            // pattern - 1
            //for (int i = 1; i <= 3; i++)
            //{
            //    for (int j = 1; j <= 3; j++)
            //    {
            //        if (j == 2)
            //        {
            //            continue;
            //        }
            //        Console.WriteLine($"i = {i} j = {j}");
            //    }
            //}







            // Task - 3/6/2025

            // Enter a number and print the Fibonacci series upto that number using a while loop in C# language

            //Console.Write("Enter a  number : ");
            //int num = int.Parse(Console.ReadLine());

            //int first = 0, second = 1;
            //Console.WriteLine($"Fibonacci series upto {num}");

            //while (first < num)
            //{
            //    Console.Write(first + " ");
            //    int next = first + second;
            //    first = second;
            //    second = next;
            //}
            //Console.WriteLine();




            // Enter the length of the string: 6
            // Enter the string: HeyGFG
            // count of vowel = 1
            // count of consonant = 5
            // print this using for loop


            //Console.Write("Enter the length of the string: ");
            //int length = int.Parse(Console.ReadLine());

            //Console.Write("Enter the string: ");
            //string input = Console.ReadLine();


            //if (input.Length != length)
            //{
            //    Console.WriteLine("Entered string length doesn't match the given length.");
            //    return;
            //}


            //int vowelCount = 0;
            //int consonantCount = 0;

            //for (int i = 0; i < input.Length; i++)
            //{
            //    char ch = char.ToLower(input[i]);

            //    if (char.IsLetter(ch))
            //    {
            //        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
            //        {
            //            vowelCount++;
            //        }
            //        else
            //        {
            //            consonantCount++;
            //        }
            //    }
            //}

            //Console.WriteLine($"Count of vowels = {vowelCount}");
            //Console.WriteLine($"Count of consonants = {consonantCount}");







            // 04/06/2025


            // strings

            //string[] fruits = {"apple", "banana", "mango"};
            //Console.WriteLine(fruits[0]);

            //fruits[2] = "Kiwi";
            //Console.WriteLine(fruits[2]);

            //Console.WriteLine(fruits.Length);





        
        }
    }
}
