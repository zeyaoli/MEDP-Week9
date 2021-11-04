/* Construct Array */
// with numbers
const numbers = [1, 2, 3, 4, 5];
// with strings
const fruits = ["banana", "apple", "kiwi", "mango"];
// store with variables
let isFrench = true;
let isSpanish = false;
let isChinese = false;
const languagesConditions = [isFrench, isSpanish, isChinese];

console.log(numbers);
console.log(fruits);
console.log(languagesConditions);

/* Access Array */
let banana = fruits[0];
console.log(banana);
let mango = fruits[fruits.length - 1];
console.log(mango);

/* Add items into array */
fruits.push("watermelon");
console.log(fruits);

// Remove item from the end of the an array
fruits.pop();
console.log(fruits);

// Remove an item from the beginning of an array
fruits.shift();
console.log(fruits);

// Add an item to the beginning of an array
fruits.unshift("pineapple");
console.log(fruits);

/* Getting index of the item
 How to use this IRL? If you have an ordered list items inside array, 
 you can do something to make it collapse after certain index.
*/
let appleIndex = fruits.indexOf("apple");
console.log(appleIndex);

/* Looping through array */
// Option 1
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Option 2
numbers.forEach(function (number) {
    console.log(number);
});
