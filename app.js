console.log("Hello World!");

var myName = "Ishant"

myName = 8 

let wholeName = "Ishant Mishra"

const pi = 3.14

console.log(wholeName);

var a;
var b = 2;

a = 7;
b = a;

console.log(a);

var sum = 10 + 10;
console.log(sum);

var diference = 45 - 33;
console.log(diference);

var product = 9 * 8;
console.log(product);

var quotient = 66 / 33;
console.log(quotient);

a++;
a--;

var product = 2.0 * 2.5;
console.log(product);

var remainder;
remainder = 11 % 3;
console.log(remainder);

a += 12;
b += 15;

a -= 1;
b -= 6;

a *= 5;
b *= 3

a /= 2
b /=2

var myStr = '"I am a "double quoted" string inside "double quotes"'
console.log(myStr);

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr);

var myStr = "This is the start. " + "This is the end."
console.log(myStr);

var ourStr = "I come first. ";
ourStr += "I come ssecond";
console.log(ourStr);

var ourName = "Mishra";
var ourStr = "Hello, our name is " + ourName + ", how are you";
console.log(ourStr);

var lastNameLength = 0;
var lastName = "Mishra";

lastNameLength = lastName.length;
console.log(lastNameLength);

 var firstLetterOfLastName = "";
var lastName = "Mishra";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

console.log(a);

var myStr = "Jello World";

myStr = "Hello World";

var firstName = "Ishant";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);

function worldBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    return result;
}

console.log(worldBlanks("dog", "big", "ran", "quickly"));

var myArray = [50,60,70];
var myData = myArray[0]
console.log(myData);

myArray[0] = 45;
console.log(myArray);

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
console.log(myData);

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray);

var myArray = [["John", 23], ["cat", 21]];
var removedFromMyArray = myArray.pop();
console.log(myArray);

var myArray = [["John", 23], ["cat", 21]];
var removedFromMyArray = myArray.shift();
console.log(myArray);

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
console.log(ourArray);

var myList = [["cereal", 3], ['milk', 2], ["banana", 3], ["juice", 2]];

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(2, 2);

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

function nextInLine(arr, item)
{
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue)  {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

trueOrFalse (true);
