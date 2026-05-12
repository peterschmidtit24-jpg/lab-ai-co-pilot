
// console.log("Hello world!");

/*
Task 1: Explain a Function 
Prompt:

“Explain this JavaScript function in detail. Add comments as needed.”
*/

function mysteryOp(arr) {
  return arr.reduce((acc, val) => acc ^ val, 0);
}



/**
 * Computes the bitwise XOR of all numbers in the given array.
 * 
 * @param {number[]} arr - Array of integers
 * @returns {number} The result of XORing all elements together (starting from 0)
 */
function mysteryOp(arr) {
  // Array.prototype.reduce() iterates through the array,
  // applying the provided callback to each element.
  // 
  // The callback (acc, val) => acc ^ val does the following:
  //   - acc : accumulator (running result)
  //   - val : current array element
  //   - ^   : bitwise XOR operator
  //
  // Initial value of the accumulator is 0 (neutral element for XOR).
  return arr.reduce((acc, val) => acc ^ val, 0);
}

/*
Common use cases

Finding the number that appears an odd number of times when others appear even times (classic interview problem).
Simple checksum or parity calculations.
Swapping variables without a temporary variable (though less common now).
Encoding/decoding simple XOR ciphers.
*/


/*
Task 2: DOM Manipulation ################################################
Prompt:

“Write a function that changes the text of an HTML element with id status when a button is clicked. Use vanilla JavaScript and follow accessibility best practices.”


*/

/**
 * Attaches a click handler to update the status element.
 * Follows accessibility best practices.
 */
function setupStatusUpdater() {
  const button = document.getElementById('updateBtn');
  const statusEl = document.getElementById('status');

  // Guard clause - prevent errors if elements are missing
  if (!button || !statusEl) {
    console.warn('Required elements (#updateBtn or #status) not found in the DOM.');
    return;
  }

  button.addEventListener('click', () => {
    updateStatus('Status has been updated successfully!');
  });
}

/**
 * Updates the status message and ensures good screen reader support.
 * 
 * @param {string} message - The new status text to display
 */
function updateStatus(message) {
  const statusEl = document.getElementById('status');
  
  if (!statusEl) return;

  // Clear and set new text (reliable for aria-live regions)
  statusEl.textContent = '';

  // Small delay helps some screen readers announce the update reliably
  setTimeout(() => {
    statusEl.textContent = message;
  }, 10);
}

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', setupStatusUpdater);


/*
Task 3: Refactor Obfuscated Code
Prompt:

“Refactor this function to make it readable and efficient. Add meaningful variable names and comments.”
*/


function r(a){let b=0;for(let i=0;i<a.length;i++){if(a[i]%2===0){b+=a[i]}}return b}

/* Results

*/

/**
 * Calculates the sum of all even numbers in an array.
 * 
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Sum of all even numbers (returns 0 if array is empty or has no even numbers)
 */
function sumEvenNumbers(numbers) {
  // Guard clause: handle invalid or empty input gracefully
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  let sum = 0;

  for (const num of numbers) {
    // Check if the number is even
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}


/**
 * Calculates the sum of all even numbers in an array using reduce.
 */
const sumEvenNumbersM = (numbers = []) => {
  return numbers.reduce((sum, num) => {
    return (num % 2 === 0) ? sum + num : sum;
  }, 0);
};