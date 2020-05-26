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
        "firstName": ""
    }
]