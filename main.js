/*
=======================================================
** Week 3 - Project 2 **
*** More Functioning ***
Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.
In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.
For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/

document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");


// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.

function minimum(num1, num2) {
    if (num1 > num2) {
        return `${num2} is smaller than ${num1}.`;
    } else {
        return `${num2} is larger than ${num1}.`;
    }
};

document.getElementById("callMinimum").addEventListener("click", function() {
    document.getElementById("q1").innerHTML = minimum(document.getElementById("numOne").value, document.getElementById("numTwo").value);
});

// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.

function minimum3(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        return `${num1} is the smallest number.`;
    } else if (num2 <= num1 && num2 <= num3) {
        return `Nope, ${num2} is the smallest number.`;
    } else if (num3 <= num1 && num3 <= num2) {
        return `No no no, ${num3} is the smallest number.`;
    } else {
        return `I'm not sure anymore lololol.`;
    }
};

document.getElementById("callMinimum3").addEventListener("click", function() {
    document.getElementById("q2").innerHTML = minimum3(document.getElementById("numberOne").value, document.getElementById("numberTwo").value, document.getElementById("numberThree").value);
});

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.

var numArray = [1, 2, 3, 4];

function sum(array) {
    var arrayTotal = 0;
    for (var i = 0; i < array.length; i++) {
        arrayTotal += array[i];
        arrayTotal = parseInt(arrayTotal);
    }
    return `I've calculated and the total is ${arrayTotal}.`;
};

document.getElementById("callArrayTotalSum").addEventListener("click", function() {
    document.getElementById("q3").innerHTML = sum(numArray);
});

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

var numArray2 = [1, 2, 3, 4];

function multiply(array) {
    var arrayTotal = 1;
    for (var i = 0; i < array.length; i++) {
        arrayTotal *= array[i];
    }
    return `I've calculated and the total is ${arrayTotal}.`;
};

document.getElementById("callArrayTotalMultiply").addEventListener("click", function() {
    document.getElementById("q4").innerHTML = multiply(numArray2);
});

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].length < 6) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
};

document.getElementById("callFilterSixPlus").addEventListener("click", function() {
    document.getElementById("q5").innerHTML = filterSixPlus(words);
});

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

var tempInput1, tempValue1;

function convertCelsiusToF(temperature) {
    tempInput1 = parseFloat(temperature);
    tempValue1 = `${(tempInput1 * 1.8) + 32}`;
    // tempValue = tempValue.toFixed(0);
    return `${tempInput1}<sup>o</sup>C is equal to ${tempValue1}<sup>o</sup>F`;
};

document.getElementById("callTempCToF").addEventListener("click", function() {
    document.getElementById("q6a").innerHTML = convertCelsiusToF(document.getElementById("tempInC").value);
});

var tempInput2, tempValue2;

function convertCelsiusToK(temperature) {
    tempInput2 = parseFloat(temperature);
    tempValue2 = `${tempInput2 + 273.15}`;
    // tempValue = tempValue.toFixed(0);
    return `${tempInput2}<sup>o</sup>C is equal to ${tempValue2}<sup>o</sup>K`;
};

document.getElementById("callTempCToK").addEventListener("click", function() {
    document.getElementById("q6b").innerHTML = convertCelsiusToK(document.getElementById("tempInC").value);
});

// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.

var convertMethod = prompt("Temperature Degree Conversion (please enter 'F to C ' or 'C to F '):"),
    tempInput3, tempValue3, tempConvert3;

function tempDegConvertCF(tempDegree) {
    if (convertMethod === "C to F") {
        tempInput3 = parseFloat(tempDegree);
        tempValue3 = `${(tempInput3 * 1.8) + 32}`;
        // tempConvert3 = tempValue3.toFixed(0);
        return `${tempInput3}<sup>o</sup>C is equal to ${tempValue3}<sup>o</sup>F`;
    } else if (convertMethod === "F to C") {
        tempInput3 = parseFloat(tempDegree);
        tempValue3 = `${(tempInput3 - 32) / 1.8}`;
        // tempConvert3 = tempValue3.toFixed(0);
        return `${tempInput3}<sup>o</sup>F is equal to ${tempValue3}<sup>o</sup>C`;
    } else {
        return `Your choice does not exist. Try again!!`;
    }
};

document.getElementById("q7a").innerHTML = `You've chosen the ${convertMethod} method.`;

document.getElementById("callTempDegConvert").addEventListener("click", function() {
    document.getElementById("q7b").innerHTML = tempDegConvertCF(document.getElementById("tempDegInC").value);
});

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()


// var stringB = prompt("Enter a sentence to count the amount of Bs."),
var stringBB = "Bee Be Cool have a Beer with a Bear, and dance with a Baked thing."
bCount = 0;

function countBs(string) {
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === "B") {
            bCount += 1;
        }
    }
    return `This sentence contains ${bCount} Bs.`;
};

console.log(countBs("Bee Be Cool have a Beer with a Bear, and dance with a Baked thing"));

document.getElementById("q8a").innerHTML = `Your sentence: ${stringBB}`

document.getElementById("callCountBs").addEventListener("click", function() {
    document.getElementById("q8b").innerHTML = countBs(stringBB);
});

// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!

document.getElementById("q9").innerHTML = `I tried the link above and it directed me to a tabolid-ish website. I couldn't find the supposed game anywere.`

// ADVANCED TRACK
// A. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.

var stringChar = prompt("Write a sentence for the countChars function: "),
    specificChar = prompt("Choose a character for the counterChars function: "),
    charCount = 0;


function countChars(string, character) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === character) {
            charCount += 1;
        }
    }
    return `This sentence contains ${charCount} "${character}"s.`;
};


document.getElementById("qA1").innerHTML = `Your sentence: ${stringChar}`;

document.getElementById("qA2").innerHTML = `Your character: ${specificChar}`;

document.getElementById("callCountChars").addEventListener("click", function() {
    document.getElementById("qA3").innerHTML = countChars(stringChar, specificChar);
});

// B. Declare a function called ohZero that replaces all of the o's in a string with 0's.

var mySentence = prompt("Write a sentence for the ohZero function: ");

function ohZero(string) {
    var splitString = string.split("");
    for (var i = 0; i < splitString.length; i++) {
        if (splitString[i] === "O" || splitString[i] === "o") {
            splitString[i] = "0";
        }
    }
    return splitString.join("");
};

document.getElementById("qB1").innerHTML = `Original sentence: ${mySentence}`

document.getElementById("callReplacement").addEventListener("click", function() {
    document.getElementById("qB2").innerHTML = `Modified sentence: ${ohZero(mySentence)}`;
});

// C. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

function bottlesOfBeers(numberOfBottles) {
    for (beer = numberOfBottles; beer > 0; beer--) {
        remainder = beer - 1;
        if (beer != 1) {
            beercase = "bottles";
        } else {
            beercase = "bottle";
        }

        if (remainder != 1) {
            remaindercase = "bottles";
        } else {
            remaindercase = "bottle";
        }

        var statement = (beer + " " + beercase + " of beer,");
        statement += ("Take 1 down, pass it around,");
        if (remainder != 0) {
            statement += (remainder + " " + remaindercase + " of beer on the wall.");
        } else {
            statement += ("No more bottles of beer on the wall.");
        }
    }
    return numberOfBottles;
};

document.getElementById("qC").innerHTML = bottlesOfBeers(99);

    console.log(bottlesOfBeers(99));



// D. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.

var guessStatement, guessNumber, randomNumber;

function guessingGame() {
    guessStatement = prompt("Guess a number from 1 to 5");
    guessNumber = parseIn(guessStatement);
    randomNumber = Math.floor(Math.random() * 6);

    while (guessNumber != randomNumber) {
        if (guessNumber > randomNumber) {
            document.getElementById("qD1").innerHTML += `<p>Incorrect! Too high! You guessed ${randomNumber}. Guess again with a lower number.</p>`;
            guessNumber = prompt(`Incorrect! Too high! You guessed ${randomNumber}. Guess again with a lower number.`);
        } else {
            document.getElementById("qD1").innerHTML += `<p>No no no. Too low! You guessed ${randomNumber}. Guess again with a higher number.</p>`;
            guessNumber = prompt(`No no no. Too low! You guessed ${randomNumber}. Guess again with a higher number.`);
        }
    };
    alert(`Finally! You got it, the correct number is ${randomNumber}.`);

    document.getElementById("qD2").innerHTML = `Finally! You got it, the correct number is ${randomNumber}.`
}

//minimum3
