console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log('Parts needed: ', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11]
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');
let removedItem = supplyChanges.pop();
console.log(removedItem);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log(`supply changes: ${supplyChanges}`);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');

for (let x = 0; x < supplyChanges.length; x++) { //using variable 'x' to iterate through each item in supplyChanges array
  if (supplyChanges[x] > 0) { //checking for positive numbers
    console.log('Added ' + supplyChanges[x] + ' parts');
  }
  else if (supplyChanges[x] === 0) { //checking for zero
    console.log('No Change');
  }
  else { // only thing left is negative numbers
    console.log('Removed ' + supplyChanges[x] + ' parts');
  }
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');
for (parts of supplyChanges) { // same thing as a for loop, but more concise initial declaration
  if (parts > 0) {
    console.log('Added ' + parts + ' parts');
  }
  else if (parts === 0) {
    console.log('No Change');
  }
  else {
    console.log('Removed ' + parts + ' parts');
  }
}


// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');
let x = 0; // declaring global variable to iterate through supplyChanges
while (x < supplyChanges.length) { // setting while loop condition to limit to length of array
  if (supplyChanges[x] > 0) { // checking if value at x index is positive
    console.log('Added ' + supplyChanges[x] + ' parts');
  }
  else if (supplyChanges[x] === 0) { // checking if value at x index is zero
    console.log('No Change');
  }
  else { // if value at x index is negative
    console.log('Removed ' + supplyChanges[x] + ' parts');
  }
  x++; // incrementing x by 1 - no infinite loops plz
}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');
let total = 0; // declaring global variable so it's still here after the loop
for (let i = 0; i < supplyChanges.length; i++) { // setting loop to check each item in supplyChanges
  total = total + supplyChanges[i]; // add the item value to the total
  console.log(`total is ${total}`); // tell me the current value of total
}
console.log(total); //tell me the final total

// Why did we declare a partsNeeded variable at the beginning?
console.log('Did we get enough parts?');
if (partsNeeded <= total){
  console.log('Yes');
}
else {
  console.log('No, we need', (partsNeeded - total), 'more parts');
}
// Ohhh, that's why! We still need more parts!
