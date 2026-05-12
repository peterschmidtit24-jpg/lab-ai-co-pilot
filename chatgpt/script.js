
// console.log("Hello world!");

/*
Task 1: Explain a Function ###################################
Prompt:

“Explain this JavaScript function in detail. Add comments as needed.”
*/

function mysteryOp(arr) {
  return arr.reduce((acc, val) => acc ^ val, 0);
}


/*
Response: 
This function uses the bitwise XOR operator ^ together with reduce().
The function XORs all numbers in the array together.
This function is often used to find the number that appears only once 
when all other numbers appear twice.
*/

function mysteryOpResp(arr) {
  // reduce() walks through the array from left to right.
  // acc is the accumulated result.
  // val is the current array element.
  // The initial value of acc is 0.
  return arr.reduce((acc, val) => {
    // XOR the accumulated value with the current value.
    return acc ^ val;
  }, 0);
}

console.log(mysteryOp([1, 2, 3]));
console.log(mysteryOpResp([1, 2, 3]));


/*
Task 2: DOM Manipulation ################################################
Prompt:

“Write a function that changes the text of an HTML element with id status when a button is clicked. Use vanilla JavaScript and follow accessibility best practices.”


*/

/*
Result:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Manipulation Example</title>
  <script src="script.js" defer></script>
</head>
<body>

  <p id="status" role="status" aria-live="polite">
    Waiting for action...
  </p>

  <button id="changeStatusButton" type="button">
    Change status
  </button>

</body>
</html>

*/

// Get the button element from the DOM
const button = document.getElementById("changeStatusButton");

// Get the status element from the DOM
const statusElement = document.getElementById("status");

// Define the function that changes the text
function changeStatusText() {
  statusElement.textContent = "Status changed successfully.";
}

// Add a click event listener to the button
button.addEventListener("click", changeStatusText);


/*
Task 3: Refactor Obfuscated Code
Prompt:

“Refactor this function to make it readable and efficient. Add meaningful variable names and comments.”
*/


function r(a){let b=0;for(let i=0;i<a.length;i++){if(a[i]%2===0){b+=a[i]}}return b}

/* Result
 */

function sumEvenNumbers(numbers) {
  let sum = 0;

  // Go through each number in the array
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    // Check whether the number is even
    if (currentNumber % 2 === 0) {
      sum += currentNumber;
    }
  }

  return sum;
}

const result = sumEvenNumbers([1, 2, 3, 4, 5, 6]);

console.log(result); // 12

function sumEvenNumbersR(numbers) {
  return numbers.reduce((sum, number) => {
    if (number % 2 === 0) {
      return sum + number;
    }

    return sum;
  }, 0);
}