
// console.log("Hello world!");

/*
Task 1: Explain a Function
Prompt:

“Explain this JavaScript function in detail. Add comments as needed.”
*/

function mysteryOp(arr) {
  return arr.reduce((acc, val) => acc ^ val, 0);
}



/*
Explanation:
This function performs a bitwise XOR across all elements in an array.
How it works
Array.reduce() iterates over every element, accumulating a result. The accumulator 
starts at 0 (the second argument to reduce), and at each step it XORs the current 
accumulated value with the next element.
XOR (^) works bit-by-bit: bits that are the same produce 0, bits that differ 
produce 1.

Classic use case — finding the unique number
Because duplicate values cancel each other out (x ^ x === 0), this is a 
well-known O(n) / O(1) solution to the "find the element that appears only once" 
problem.

*/


/**
 * Computes the cumulative XOR of all elements in an array.
 *
 * XOR (^) properties that make this useful:
 *   - x ^ x === 0      (a number XOR'd with itself cancels out)
 *   - x ^ 0 === x      (XOR with 0 is a no-op / identity)
 *   - Commutative & associative (order doesn't affect result)
 *
 * @param {number[]} arr - Array of integers
 * @returns {number} The XOR of all elements, or 0 for an empty array
 */
function mysteryOp(arr) {
  return arr.reduce(
    (acc, val) => acc ^ val, // XOR accumulator with current value
    0                        // Initial value: identity element for XOR
  );
}

mysteryOp([4, 1, 2, 1, 2])
//  0 ^ 4  = 4   (0000 ^ 0100 = 0100)
//  4 ^ 1  = 5   (0100 ^ 0001 = 0101)
//  5 ^ 2  = 7   (0101 ^ 0010 = 0111)
//  7 ^ 1  = 6   (0111 ^ 0001 = 0110)
//  6 ^ 2  = 4   (0110 ^ 0010 = 0100)
//  result → 4


/*
Task 2: DOM Manipulation ################################################
Prompt:

“Write a function that changes the text of an HTML element with id status when a button is clicked. Use vanilla JavaScript and follow accessibility best practices.”


*/

/**
 * updateStatus — changes the #status element's text on button click.
 *
 * Accessibility considerations:
 *  - role="status" + aria-live="polite" on #status → screen readers
 *    announce the new text without stealing focus
 *  - aria-pressed on the button reflects toggle state
 *  - The button has a visible, descriptive label
 *  - Focus is never lost or hijacked
 */
function updateStatus(newMessage) {
  const statusEl = document.getElementById("status");
  if (!statusEl) return; // guard: element may not exist yet

  statusEl.textContent = newMessage;
}

// Wire up the button after the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("update-btn");
  if (!btn) return;

  const messages = [
    "Profile saved successfully.",
    "Changes are pending review.",
    "All systems operational.",
  ];
  let index = 0;

  btn.addEventListener("click", () => {
    updateStatus(messages[index % messages.length]);
    index++;

    // Reflect toggle state for assistive technology
    btn.setAttribute("aria-pressed", "true");
    setTimeout(() => btn.setAttribute("aria-pressed", "false"), 300);
  });
});


/*
Task 3: Refactor Obfuscated Code
Prompt:

“Refactor this function to make it readable and efficient. Add meaningful variable names and comments.”
*/


function r(a){let b=0;for(let i=0;i<a.length;i++){if(a[i]%2===0){b+=a[i]}}return b}


/* results 

*/

/**
 * Calculates the sum of all even numbers in an array.
 *
 * @param {number[]} numbers - Array of integers to process
 * @returns {number} The sum of all even elements, or 0 if none exist
 *
 * @example
 * sumEvenNumbers([1, 2, 3, 4, 5, 6]) // → 12  (2 + 4 + 6)
 * sumEvenNumbers([1, 3, 5])           // → 0   (no even numbers)
 * sumEvenNumbers([])                  // → 0   (empty array)
 */
function sumEvenNumbers(numbers) {
  let evenSum = 0;

  for (const num of numbers) {
    const isEven = num % 2 === 0;
    if (isEven) {
      evenSum += num;
    }
  }

  return evenSum;
}


function sumEvenNumbersM(numbers) {
  return numbers
    .filter(num => num % 2 === 0)  // keep only even numbers
    .reduce((sum, num) => sum + num, 0); // add them up
}