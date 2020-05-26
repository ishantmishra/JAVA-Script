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

console.log(trueOrFalse(true));

function testEqual(val)  {
    if  (val == 12) {
        return "Equal";
    }
    return "Not Equal"
}

console.log(testEqual(10)); 

function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Euqal";
}
console.log(testNotEqual(10));

function testStrictNotEqual(val) {
    if (val !== 99) {
        return "Not Equal";
    }
    return "Euqal";
}
console.log(testNotEqual(10));

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(10));

function testGreaterOrEqualThan(val) {
    if (val >= 100) {
        return "100 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterOrEqualThan(10));

function testLessThan(val) {
    if (val < 100) {
        return "Under 100";
    }
    if (val < 10) {
        return "Under 10";
    }
    return "10 or Over";
}
console.log(testLessThan(10));

function testLessOrEqualThan(val) {
    if (val <= 100) {
        return "Less than or Equal to 100";
    }
    if (val <= 10) {
        return "Less than or Equal to 10";
    }
    return "More than 10";
}
console.log(testLessOrEqualThan(10));

function testLogicalAnd(val) {
    if (val <= 50 && val >=25) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(10));

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(10));

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(7));

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }
    else if (num < 10) {
        return "Small";
    }
    else if (num < 15) {
        return "Medium";
    }
    else if (num < 20) {
        return "Large";
    }
    else {
        return "Huge";
    }
}

console.log(testSize(23));

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }
    else if (strokes <= par - 2) {
        return names[1];
    }
    else if (strokes == par - 1) {
        return names[2];
    }
    else if (strokes == par) {
        return names[3];
    }
    else if (strokes == par + 1) {
        return names[4];
    }
    else if (strokes == par + 2) {
        return names[5];
    }
    else if (strokes >= par + 3) {
        return names[6];
    }
}
console.log(golfScore(5, 4));

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break; 
    }

    return answer;
}    
console.log(caseInSwitch(3));

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "Apple";
            break;
        case "b":
            answer = "Bird";
            break;
        case "c":
            answer = "cat";
            break;  
        default:
            answer = "stuff";
            break;          
    }
    return answer;
}
console.log(switchOfStuff("a"));

function isLess(a, b) {
    return a < b; 
}

console.log(isLess(10, 15));

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;    
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;                      
    }

    var holdbet = "Hold"
    if(count > 0) {
        holdbet = "Bet"
    }
    return count + " " + holdbet;
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));

var ourDog = {
    'name': 'camper',
    'legs': 4,
    'tails': 1,
    'friends': ['everything']
};

var myDog = {
    "name": "Leo",
    "legs": 4,
    "tails": 1,
    "friends": []
};

//DOT NOTATION

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//BRACKET NOTATION

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog['bark'] = "woof!";
delete myDog.friends;
myDog.name = "Leo";
console.log(myDog);

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };
    result = lookup[val];
    return result;
}

console.log(phoneticLookup("charlie"));

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }
    else {
        return "Not Found";
    }
}
console.log(checkObj("gift"));

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1972,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Ishant Mishra",
        "title": "Kun Faya Kun",
        "release_year": 2020,
        "formats": [
            "YouTube Video"
        ]
    }
];
console.log(myMusic);

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passengers seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "tress",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(myPlants[1].list[1]);

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love A Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));

var myArray = [];

var i = 0;
while(i < 10) {
    myArray.push(i);
    i++;
}
console.log(myArray);

var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}
console.log(ourArray);
var ourArray = [];

for (var i = 10; i > 0; i -= 1) {
    ourArray.push(i);
}
console.log(ourArray);

var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
console.log(total);

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    return product
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);


var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
} while (i < 5)
console.log(i, myArray);

var contacts = [
    {
        "firstName": "Ishant",
        "lastName": "Mishra",
        "number": "9876543210",
        "likes": ["Burgers", "Reading", "Football"]
    },
    {
        "firstName": "Antony",
        "lastName": "Vincent",
        "number": "9876543211",
        "likes": ["Pizza", "Cricket"]
    },
    {
        "firstName": "Naman",
        "lastName": "Jain",
        "number": "9876543212",
        "likes": ["Chinese", "Carrom"]
    }
    
];
function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contacts";
}

var data = lookUpProfile("Ishant", "likes");
console.log(data);

function randomFraction() {

    return Math.random();
}
console.log(randomFraction());

var randonNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(5,15);
console.log(myRandom);

function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("25"));

function convertToIntegers(str) {
    return parseInt(str, 2)
}

console.log(convertToIntegers("10011"));

function checkEqual(a,b){
    return a === b ? true : false;
    //return a === b;
}

console.log(checkEqual(2,2));


function checkSign(num){
    return num > 0 ? 'positive' : num < 0 ? 'negetive' : 'zero';
}
console.log(checkSign(10));
console.log(checkSign(0));

function freezeObject(){
    const Math_Constant = {
        PI: 3.14
    };

    Object.freeze(Math_Constant);

    try{
        Math_Constant.PI = 99;
    } catch(ex){
        console.log(ex);
    }

    return Math_Constant.PI;
}

console.log(freezeObject());

var magic = function(){ // Anonymous function
    return new Date();
};
console.log(magic());

const arrowMagic = () => new Date();  // we skipped the {} because it only return the value
console.log('Arrow Function: ' + arrowMagic());

var concatArray = (array1,array2) => array1.concat(array2); 

console.log(concatArray([1,2],[3,4,5]));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const increment = (function() {
    return function increment(number, value = 1){  // defaulr value is 1 if no second parameter
        return number + value;
    };
})();

console.log(increment(5,2));
console.log(increment(5));

const sums = (function (){
    return function sums(...args){
        return args.reduce((a,b) => a + b, 0);
    };
})();

console.log("sum is: " + sums(1,2,3)); //...3 arguments.
console.log("Sum is : " + sums(1,2,3,2,4)); //5 arguments.

const arr1 = ['JAN','FEB','MARCH','APRIL', 'MAY'];

let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();

console.log(arr2); 
console.log(arr1);

var voxel = {
    x: 3,
    y: 4,
    z: 5
};

// Old way 
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

//New Way, faster 

const { x : m, y : n, z : o } = voxel;

console.log(" sum of Variables is: " + m + n + o);

//Destructuring with Nested objects

const LOCAL_FORECAST = {
    today : { min : 72, max : 83 },
    tomorrow : { min : 75, max : 90 }
};

function getMaxOfTomorrow(forecast){

    const {tomorrow : { max : maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}

console.log(" max of Tomorrow is " + getMaxOfTomorrow(LOCAL_FORECAST));


const source = [1,2,3,4,5,6,7];

function removeFirstTwo(list){
    const [ , , ...result] = list; //The commas skip the first 2 elements of list and copy the rest to result

    return result;
}

const result = removeFirstTwo(source);
console.log(result);

//Use destructuring Assignment to pass Object as a function Parameter;
// Passing only the properties which are needed to the function instead of passing the entire object.
//Usefull in API calls

const  statistics = {
    max: 56.78,
    median: 34.54,
    mode: 23.87,
    min: -0.75
};

const half = (function(){
    return function half({max, min}){
        return (max + min) / 2.0;
    };
})();
console.log(" Displaying the sum of min and max: " + half(statistics));


const person = {
    name: 'Ishant Mishra',
    age: 18
};

const greetings = `Hello my name is ${person.name}! 
    I am ${person.age} years old.`;                

console.log(greetings);



const resultObj = {
    success: ['max-length', 'no-amd', 'prefer-arrow-function'],
    failure: ['no-var' ,'var-on-top' ,'linebreak'],
    skipped: ['id-blacklist', 'no-dup-keys']
};

function makeList(arr){
    const resultDisplayArray = [];

    for(let i = 0; i < arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return resultDisplayArray;
}

const resultDisplayArray = makeList(resultObj.failure);
console.log(resultDisplayArray);


//Tagged Template Literals:

var a1 = 5;
var b1 = 10;

function foo(strings, ...values) {
    console.log("." + strings[0] + ".");
    console.log("." + strings[1] + ".");
    console.log("." + strings[2] + ".");
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
}

foo`Sum is ${a1 + b1}
Product is ${a1 * b1}
Division is ${b1 / a1}`;



const createPerson = (name,age,gender) => ({name,age,gender}); // no need to manually assign values
console.log(createPerson('Ishant Mishra', 18, 'male'));



//New Way
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log("Bicycle Gear: " + bicycle.gear);

// class Syntax to Define a Constructor function

class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);

//Getter and Setter for Class

class Book {
    constructor(author) {
        this._author = author;
    }
    //getter
    get writer(){
        return this._author;
    }

    //setter
    set writer(updateAuthor) {
        this._author = updateAuthor;
    }
}

//Example

function makeClass() {

    class Thermostat {
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }

        get temperature(){
            return this._temp;
        }

        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }

    return Thermostat;
}

const Thermostat = makeClass(); // Gets the Thermostat object
const thermos = new Thermostat(76); // initialize temp to 76

let temp = thermos.temperature; // no paranthese here

console.log("OLD Temp: "+ temp);
thermos.temperature = 26;
temp = thermos.temperature;

console.log("New Temp: "+ temp);


 //================================== Classes =============================================

 /*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor (sides){   // sides is an array 
        this._sides = sides;
    }

    perimeter(){
        let perimeter = 0
        for(let i = 0; i < this._sides.length; i++){
            perimeter += this._sides[i];
        }
        return perimeter;
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);
console.log( "Area of Polygon is: " + rectangle.perimeter());

// ================================== Extended Functional class ============================
//create a method for a class outside class declaration;

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function(){
    return this.w * this.h;
}

//=================================== Inheritance ==============================================
// Square extends Rectangle and initializes sides.
class Square extends Rectangle{
    constructor(s){
        super(s); // super needed to access the parent class members.
        this.w = s;
        this.h = s;
    }
}

const rec = new Rectangle(3, 4);
const sqr = new Square(3);

console.log("Area of Base class rectangle: " + rec.area());
console.log("Area of derived class Square: " + sqr.area());

//==================================== Sync Callback ==================================================
// callback is a function that gets passed to the parameter of another function and runs the functions call finishes

const sayName = (name, cb) => {
    console.log('running the function sayName');
    console.log('running the function sayName');

    cb();
}

function callback(){
    console.log('Running the Callback function');
}

sayName('shashank', callback);  //Specifying the callback function name
//===============================Async Callback ========================================================
// first gets added to the callstack is then executes.
// Nest, setTimeout gets added to the stack, since it has a callback function(arrow function) and is 
// supposed to be executed after 2 seconds, it gets added to the webAPI stack and Call stack is cleared for next line.
// Last gets printed
// after 2 seconds, the callback gets called and id moved to the call stack and from Callback is printed.

console.log('first');

setTimeout(() => {
    console.log('From Callback');
},2000);

console.log('Last');

//===================================== async await =======================================================

async function getData(){

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'),3000);
    });

    let result = await promise; // waits for 3 seconds for getting the result, because setTimeout() waits for 3 seconds.
    console.log(result);        // we don't need to write then because of await
}
getData();