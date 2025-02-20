// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
    return Math.max(num1, num2);
}

let number1 = 5;
let number2 = 5;
let result = maxOfTwoNumbers(number1, number2);
console.log(`The larger number between ${number1} and ${number2} is: ${result}`);




// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
    if (words.length === 0) {
        return null; // Return null for an empty array
    }

    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}


let longestWordResults = findLongestWord(words);
console.log(`The longest word is: ${longestWordResults}`);





// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

let results = sumNumbers(numbers);
console.log(`The sum of the numbers is: ${results}`);




// Iteration #3.1 Bonus:



function sum(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (typeof element === 'number') {
            total += element;
        } else if (typeof element === 'boolean') {
            total += Number(element);
        } else if (typeof element === 'string') {
            total += element.length;
        } else {
            throw new Error("Unsupported data type sir or ma'am");
        }
    }

    return total;
}

try {
    let mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
    let resultss = sum(mixedArr);
    console.log(`The sum of the array is: ${resultss}`);
} catch (error) {
    console.error(error.message);
}





// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.length === 0) {
        return null; // To avoid division by zero
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

// Example usage:
let averageResult = averageNumbers(numbersAvg);
console.log(`The average of the numbers is: ${averageResult}`);




// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
    if (words.length === 0) {
        return null; // To avoid division by zero
    }

    let totalLength = 0;
    for (let i = 0; i < words.length; i++) {
        totalLength += words[i].length;
    }

    return totalLength / words.length;
}


let averageLengthResult = averageWordLength(wordsArr);
console.log(`The average length of the words is: ${averageLengthResult}`);


// Bonus - Iteration #4.1

function avg(arr) {
    if (arr.length === 0) {
        return null; // To avoid division by zero
    }

    let total = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' || typeof arr[i] === 'boolean') {
            total += Number(arr[i]);
            count++;
        } else if (typeof arr[i] === 'string') {
            total += arr[i].length;
            count++;
        }
    
    }

    return total / count;
}



const mixedArry = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
let averageResults = avg(mixedArry);
console.log(`The average of the mixed array is: ${averageResults}`);


// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];


function uniquifyArray(words) {
  if (words.length === 0) {
        return null; // To avoid division by zero
    }
    let uniqueArray = [];

    for (let i = 0; i < words.length; i++) {
        if (uniqueArray.indexOf(words[i]) === -1) {
            uniqueArray.push(words[i]);
        }
    }

    return uniqueArray;
}

let uniqueWordsArray = uniquifyArray(wordsUnique);
console.log(`Array with duplicates: ${wordsUnique}`);
console.log(`Array without duplicates: ${uniqueWordsArray}`);




// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(words, targetWord) {
     if (words.length === 0) {
        return null; // To avoid division by zero
    }
    for (let i = 0; i < words.length; i++) {
        if (words[i] === targetWord) {
            return true;
        }
    }

    return false;
}


let wordToSearch = "orange";
let resultsss = doesWordExist(wordsFind, wordToSearch);

if (resultsss) {
    console.log(`The word "${wordToSearch}" exists in the array.`);
} else {
    console.log(`The word "${wordToSearch}" does not exist in the array.`);
}




// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];


function howManyTimes(words, targetWord) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === targetWord) {
            count++;
        }
    }

    return count;
}

let wordToSearchh = "banana";
let countResult = howManyTimes(wordsCount, wordToSearchh);
console.log(`The word "${wordToSearchh}" appears ${countResult} times in the array.`);




// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];


function greatestProduct(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxProduct = 0;

    // Check horizontal products
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= cols - 4; j++) {
            const product = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    // Check vertical products
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j < cols; j++) {
            const product = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    // Check diagonal products (from top-left to bottom-right)
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j <= cols - 4; j++) {
            const product = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    // Check diagonal products (from top-right to bottom-left)
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = cols - 1; j >= 3; j--) {
            const product = matrix[i][j] * matrix[i + 1][j - 1] * matrix[i + 2][j - 2] * matrix[i + 3][j - 3];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    return maxProduct;
}

// Example usage:
const resultt = greatestProduct(matrix);
console.log(`The greatest product in the 20x20 grid is: ${resultt}`);



// The following is required to make unit tests work.
//Environment setup. Do not modify the below code. 
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
