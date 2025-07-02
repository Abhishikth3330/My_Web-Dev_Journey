using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{

    //enum Level
    //{
    //    Low,
    //    Medium,
    //    High
    //}


    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        Level mylevel = Level.Medium;
    //        Console.WriteLine(mylevel);
    //    }
    //}




    //class Program
    //{
    //    enum Months
    //    {
    //        January,
    //        February,
    //        March,
    //        April,
    //        May
    //    }

    //    static void Main(string[] args)
    //    {
    //        int mynum = (int)Months.April;
    //        Console.WriteLine(mynum);
    //    }
    //}





    // FILE TYPE
    class Program
    {
        static void Main (string[] args)
        {
            string writeText = "Hello World !!!!";
            File.WriteAllText("filename.txt", writeText);

            string readText = File.ReadAllText("F:\\IT_Networkz\\Lectures\\DotNet\\July\\ConsoleApp1\\bin\\Debug\\filename.txt");
            Console.WriteLine(readText);
        }
    }



}
