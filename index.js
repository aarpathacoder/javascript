// Javascript improves the user experience of the web page by converting it from a static page into an interactive one
// Javascript adds behaviour to web page

// You can add javscript file inside html by keeping your file in script tag and always add script at end of html body
/* <script>  You can write your code here  </script> */

// You can show the content to user by typing console.log("Your message here");




// Values and Variables in Javascript

// var myName=" Pathan Khaja Aarif";
// var myAge=26;

// console.log(myName);










// Naming Variables Rules and best pratices

// 1.The first character must be an underscore(_) or an dollar($). You cant use a number as the character.
// 2.The rest of the variable name can include any number, or the underscore. Cant use any chracters, including spaces.
// 3.Variable names are case sensitive.
// 4.No limit to the lenght of the variable name.
// 5.You cant use one of javascript reserved word as a variable name.


// Naming Practice

// var _myName="Aarif";
// var 1myName="PAthan";
// var _1my__Name="Khaja";
// var $myName="Aarif Pathan";

// console.log(_myName);








// Datatypes in Javascript

// We have Six Data types that are primitives,

// 1.undefined
// 2.Boolean
// 3.number
// 4.String
// 5.BigInt
// 6.Symbol

// var myName="Aarif Pathan";
// console.log(myName);

// var myAge=26;
// console.log(myAge);

// var iAmAarif=true;
// console.log(iAmAarif);


// To know the typeof Operator
// console.log(typeof(myName));

// DataTypes Practice

// console.log(10+"20");
// console.log(9-"5");
// console.log("java"+"script");
// console.log(" "=" ");
// console.log(" "+0);
// console.log("Aarif"-"Pathan");
// console.log(true+false);
// console.log(true+true);
// console.log(false+true);
// console.log(false-true);








// Expression and Operators in Javascript

// 1. Assignment operators.
// 2. Arthimetic Operators.
// 3. Comparison Operators
// 4. Logical Operators
// 5. String Operators
// 6. Conditional Operators

// Assignment Operators
// An Assignment Operators assigns a value to its left Operand
// based on the value of its right operand.
// the simple assignment Operators is (=)

// var x=5;
// var y=5;
// console.log("IS both the x and y are equal" + x==y);
// or
// console.log("IS both the x and y are equal" : ${x==y});


// Arthimetic Operators
// An Arthimetic Operators takes numerical values
// (either literals or variables) as their operandsand
// returns a single numericals value

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);
// console.log("remainder Operators" + 81%8);


// Increment and Decrement Operators
// Operators: x++ or x-- or ++x or --x
// If used postfix, with operators after operand(for example, x++),
// the increment operator increments and returns the value before incrementing.

// If used prefix, with operators after operand(for example, ++x),
// the increment operator increments and returns the value after incrementing.

// Prefix increment operator means the variable is incremented first and then the expression is evaluated using the value of the variable.


// Comparison Operators
// A comparison operators compares its operands and return a logical value based on whether the comparison is true.

// var a=30;
// var b=10;

// Equal(==)

// Not Equal(a ! = b)

// Greater than(>)

// Greater than equal to (>=)

// Less than (<)

// Less than or equal to (<=)


// Logical Operators
// The Logical Operator are typically used with  Boolean(logical) values;
// when they are, they return a boolean value.

// var a=30;
// var b=-20;

// Logical AND (&&)
// The logical AND (&&) operators (logical conjunction) for a set of operands is true if and only if all of its operands are true.

// console.log(a>b && b>0);

// Logical OR (||)
// The logical OR (||) operators (logical disjunction) for a set of operands is true if and only if one or more operands is true.

// console.log(a>b || b>0);

// Logical NOT (!)
// The logical NOT (!) operators (logical complement, negation) takes truth to falsity and vice versa.

// console.log(!((a>50)||(b<0)));



// String Concatenation Operators
// The concatenation operators(+) concatenates two strings values together, returning another string that is the union of the two operands strings.

// console.log("hello" + "World");

// var names="Aarif";
// console.log(names + " Pathan");














// Control Statement and Loops in Javascript

// 1. If else
// 2. Switch Statement
// 3. While Loops
// 4. Do-while Loops
// 5. For Loops
// 6. For in Loops
// 7. For of Loops
// 8. Conditionary Operator









// If Else 
// The  if statement executes a statement if a specified condition is truthy. 
// If the condition is falsy, another statement can be executed. 


// var tomr = "rain";

// if(tomr=="rain")
// {
//     console.log("Take the rain coat with you");
// }
// else
// {
//     console.log("No need to take rain coat");
// }

// program to check whether a year is leap year or Not 


// var year=2020;

// if(year%4==0)
// {
//     console.log(" the entered year is Leap Year");
// }

// else
// {
//     console.log(" It is not a Leap Year");
// }

// If u pass falsy value to if statement it always executes the else statement 
// There are total 5 falsy values in javascript  0,"",undefined,null,NaN,false. 

// here in this example it will directly go to else statement 


// if(score=0)
// {
//     console.log("We lost the game");
// }
// else
// {
//     console.log("YAY We won the game");
// }











// Conditional (ternary) Operators 
// The conditional (ternary) operator is the only Javscript operator that takes three operands


// syntax: variablename= (condition) ? value1:value2
// (if else shorter version)


// var age=17; (age>=18) ? "You can Vote" : "You cant Vote";


// var age=17;
// console.log ((age>=18) ? "You can Vote" : "You cant Vote");










// Switch statement 
// Evaluate an Expression, matching the expression value to a case clause, and executes statements associated with that case.

// 1st without break statement 
// find the area of circle, triangle and rectangle?

// var area="circle";
// var l=4 , pi=3.14 , b=6 , r=9;

// if(area=="circle")
// {
//     console.log("the area of circle is :" + pi*r**2);
// } else if (area=="triangle")
// {
//     console.log("the area of triangle is :" + (l*b)/2);
// } else if (area=="rectangle")
// {
//     console.log("the area of rectangle is :" + (l*b));
// }else{
//     console.log("enter a proper polygon name");
// }



// using switch statement

// var area="circle";
// var l=4 , pi=3.14 , b=6 , r=9;

// switch(area)
// {
//     case 'circle':
//         console.log("the area of circle is :" + pi*r**2);
//         break;

//     case 'triangle':
//         console.log("the area of triangle is :" + (l*b)/2);
//         break;

//     case 'rectangle':
//         console.log("the area of rectangle is :" + (l*b));
//         break;


//     deafult:
//     console.log("please enter a known polygon name");

// }


// Break 
// Terminates the current loop, switch , or label 
// statement and transfer 
// program control to the statement following the terminated statement. 