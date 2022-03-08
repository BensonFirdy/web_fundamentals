var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!
// Psuedocode: Given 2 variables: countPositives and numbers
// Loop through the array
// For each array number check if greater than the 0
// If statement is true add to countPositives

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        countPositives++;
    }
}

console.log("there are " + countPositives + " positive values");


