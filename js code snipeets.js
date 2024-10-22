Write a function in JavaScript that takes an array of numbers and returns the sum of all positive numbers in the array.

let nums=[1,2,3,4,5,-1,-2]

let sum=0;

for (let each of nums){
    each>0 &&( sum+=each)
}

console.log(sum)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Write a function in JavaScript that takes a string as input and returns a new string with all the vowels removed.

let str="abcdefghijklmnopqRSTUVWXYZ";

let newStr=""
for (each of str){
    if (!["a","e","i","o","u"].includes(each.toLowerCase())){
        newStr+=each
    }
}

console.log(newStr)
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Write a function in JavaScript that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.

const strings = ["apple",  "cherry", "date", "elderberry","banana"];


let fun=(input)=>{
    return input.sort()
}

let sorted=fun(strings)
console.log(sorted)
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 Write a function in JavaScript that checks if a string is a palindrome.

 let str="aca"
console.log(str.split("").reverse().join("") === str)

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 Write a function in JavaScript that finds the second highest number in an array of numbers.
 

let nums = [1, 2, 3, 4, 11]
nums.sort((a,b)=>b-a)
console.log(nums[1])

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 Write a function in JavaScript that removes duplicates from an array.

 let arr=[1,2,3,4,1,2]

console.log([...new Set(arr)])

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 Write a function in JavaScript that returns the sum of two numbers without using the + operator.

 function add(a, b) {
  while (b !== 0) {
    // Calculate the carry, which will be shifted left
    let carry = a & b;

    // Sum of a and b where at least one of the bits is not set
    a = a ^ b;

    // Carry is shifted left by one so that adding it gives the required sum
    b = carry << 1;
  }
  return a;
}

// Example usage:
console.log(add(5, 7)); // 12
console.log(add(-3, 6)); // 3
console.log(add(10, -2)); // 8
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Write a function in JavaScript that checks if a given string is a valid IPv4 address.
function isValidIPv4(str) {
  const octets = str.split(".");
  if (octets.length !== 4) return false;
  for (let i = 0; i < octets.length; i++) {
    const octet = octets[i];
    if (isNaN(octet) || octet < 0 || octet > 255) return false;
    if (octet.length > 1 && octet[0] === "0") return false;
  }
  return true;
}

// Example usage:
console.log(isValidIPv4("192.168.0.1")); // Output: true
console.log(isValidIPv4("256.0.0.0")); // Output: false
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 Write a function in JavaScript that converts a given string to title case.
 let str="hello world";

console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the even numbers.
let nums=[1,2,3,4,5,6]

let ans=[]

for (let each of nums){
    if (each%2==0){
        ans.push(each)
    }
}

// let ans=nums.filter(each=>each%2===0)

console.log(ans)
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


What is a “closure” in JavaScript ? Provide an example.

let outer = () => {
    let a = 10;
    let inner = () => {
        console.log(a);
    };
    inner(); 
};

outer(); 

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Sorting an Array

const numbers = [102, -1, 2];

numbers.sort((a, b) => a - b);

console.log(numbers);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Making API calls using the fetch() method

const fetchAPI = async(URL) => {
      const response = await fetch(URL);
      
      const data = await response.json();
      
      console.log(data)
}
fetchAPI("https://jsonplaceholder.typicode.com/todos/1")
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Write a JavaScript program to reverse a given string. 
let a="abcder"
let b=a.split("").reverse().join("")
console.log(b)
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Write a JavaScript program to calculate the factorial of a given number. 
let num=5
let factorial=1;
for (let i=1;i<=num;i++){
    factorial*=i
}
console.log(factorial)
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Write a JavaScript function to check if a given number is prime. 
let num=7;

function prime(num){
    for (let i=2; i<=num;i++){
        if (num%2===0){
            return false
        }
        return true
    }
}

let ans=prime(num)
console.log(ans)
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 
function sortByKey(arr, key) {
    return arr.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1; // a comes before b
        }
        if (a[key] > b[key]) {
            return 1; // a comes after b
        }
        return 0; // a and b are equal
    });
}

// Example usage:
const data = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

const sortedByAge = sortByKey(data, 'age');
console.log(sortedByAge);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 
let obj1={name:"ravi"}

let obj2 = JSON.parse(JSON.stringify(obj1))
console.log(obj2)
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Write a recursive function to calculate the factorial of a given number. 
function factorial(num) { 

  if (num <= 1) return 1; 

  return num * factorial(num – 1); 

} 

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Implement a function that flattens a nested array in JavaScript, converting it into a single - level array. 

let a=[1,2,3,[3,4,5]]

console.log(a.flat(Infinity)) 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Write a function that determines if two strings are anagrams of each other  
let a="abcd"

let b="cdab"

console.log(a.split("").reverse().join()===b.split("").reverse().join())

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Given an array of numbers, write a function to find the largest and smallest numbers in the array.
let a=[1,2,3,4,5,6,7]

console.log(Math.min(...a))
console.log(Math.max(...a))
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Write a function that takes an array of integers as input and returns a new array with only the unique elements. 

let a=[1,1,2,3,4,5,6,7]

console.log([...new Set(a)])
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Implement a function to find the sum of all the numbers in an array

let a=[1,1,2,3,4,5,6,7]

let sum=0

for (let each of a){
    sum+=each
}

let sum2= a.reduce((a,b)=>a+b)
console.log(sum2)
console.log(sum)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Given a string, write a function to count the occurrences of each character in the string. 

let str="aabcdeefg";
let ans={}
for (each of str){
if (Object.keys(ans).includes(each)){
        ans[each]+=1
    }else{
        ans[each]=1
    }
}

console.log(ans)

let answer={}
for (each of str){
    answer[each]=(answer[each] || 0) +1
}

console.log(answer)
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Write a function that sorts an array of numbers in ascending order. 

let nums=[35355,33,32424]

let ans=nums.sort((a,b)=>a-b)
console.log(ans)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Write a function that reverses the order of words in a sentence without using the built-in reverse() method. 


let str="hello world this is ravi shankar";

let ans= str.split(" ").reverse().join(" ")
console.log(ans)

--------- or--------
    let str="hello world this is ravi shankar";

let split=str.split(" ");


let answer =""

for (let i=split.length -1;i>=0;i--  ){
    answer+=split[i]+" "
}
console.log(answer)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Write a function that takes an array of integers and returns the largest difference between any two numbers in the array. 
let a=[1,2,3]
console.log(Math.max(...a) - Math.min(...a))
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
In JavaScript, how do you turn an Object into an Array[] ?
et obj = { id: "1", name: "user22", age: "26", work: "programmer" };

//Method 1: Convert the keys to Array using - Object.keys()
console.log(Object.keys(obj));
// ["id", "name", "age", "work"]

// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));
// ["1", "user22r", "26", "programmer"]

// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));
//[["id", "1"],["name", "user22"],["age", "26"],["work", “programmer"]]