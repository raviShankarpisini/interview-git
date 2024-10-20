these two are import blogs regarding mcqs
https://www.geeksforgeeks.org/javascript-output-based-interview-questions/ 
https://github.com/lydiahallie/javascript-questions



// question

let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
console.log(a);
a[c] = 456;
console.log(a);
console.log(a[b]);

// output

{ '[object Object]': 123 }
{ '[object Object]': 456 }
456
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question

let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2; // obj2 refers to obj1, so obj3 also refers to obj1

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key);

// output
new value another value new value

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question

const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const c = obj.b; // here this.a is become window, so we dont have a in window

obj.b();
c();


// output 
foo 
undefined 
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question


const x = { foo: 1 };
const y = { foo: 2 };

function addFoo(obj) {
  return obj.foo + 1;
}

console.log(addFoo(x)); //2
console.log(addFoo(y)); //3

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question

const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// output

5
5
5
5
5

// explanation

// Here's why:
// i++ appudu i= 5 avutundi , tarvatha i<5 fail avutundi. 

// By the time the setTimeout callbacks actually run (after 1 second), the loop has already completed, and i has reached the value 5.


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question

const arr = [1, 2, 3, 4, 5];

arr.forEach(function (element) {
  console.log(element);
});

// output
1
2
3
4
5

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question

let x = 1;

if (function f() {}) {
  x += typeof f;
}

console.log(x); //1undefined
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question
let a = {
  x: 1,
  y: 2,
};
let b = a;
a.x = 5;
console.log(a); //{ x: 5, y: 2 }
console.log(b); //{ x: 5, y: 2 }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
let a=10
let b=10
console.log(x == y); // false. in array even we use == it compares reference not the value
console.log(x === y); // false
console.log(z == y); //true
console.log(z == x); //false
console.log(a==b) //true  . in primitive types == compares value not the reference. for reference comparison in primitive types we need to use ===

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question

var x = 0;
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    x++;
    console.log(x);
  }, 1000);
}

// output
1
2
3
4
5

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question
let a = { x: 1 };
let b = { x: 2 };
let c = { x: 3 };
let d = { x: 4 };
let e = { x: 5 };
let arr = [a, b, c, d, e];

arr.forEach((obj) => (obj.x = obj.x * 2));

console.log(a.x, b.x, c.x, d.x, e.x); // 2 4 6 8 10
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question
let num = 0;

function test() {
  var num = 1;
    return num;
    // When test() is called, a new variable num is declared inside the function using var. This variable is local to the function's scope and does not affect the global num.
}

console.log(test()); //1
console.log(num); //0
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question
let obj = { name: "John", age: 25 };
let newObj = { ...obj, age: 30 };

console.log(obj.age); //25
console.log(newObj.age); //30

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question
const add = (a = 1, b = 2) => a + b;
console.log(add()); //3
console.log(add(5)); //7
console.log(add(undefined, 10)); //11


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const name = "John";
const age = 25;

const user = { name, age };
console.log(user); //{ name: 'John', age: 25 }
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); //1
console.log(b); //2
console.log(c); //3
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(typeof null); // object
// In JavaScript, typeof null returns "object". This is actually a well-known bug from the early days of JavaScript, where null was mistakenly classified as an object. Despite being incorrect, this behavior remains for backward compatibility.
console.log(typeof undefined); // undefined
console.log(null === undefined); // false
console.log(null == undefined); // true
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const obj = { a: 1, b: 2, c: 3 };
const { a, b } = obj;
console.log(a, b); // 1,2
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

arr2.push(4);

console.log(arr1); //[ 1, 2, 3 ]
console.log(arr2);//[ 1, 2, 3, 4 ]

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const x = 10;

function foo() {
  console.log(x); // error Cannot access 'x' before initialization
  const x = 20;
}

// first it checks its own scope then moved to global scope. 
//Although there is a global variable x with a value of 10, the function foo has its own local x, declared with const.

foo();
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const a = [1, 2, 3];
const b = a;

b.push(4);

console.log(a); //[ 1, 2, 3, 4 ]
console.log(b); //[ 1, 2, 3, 4 ]
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const companies = [
  { id: "1", name: "Facebook" },
  { id: "2", name: "Apple" },
  { id: "3", name: "Google" },
];

companies.sort((a, b) => (a.name > b.name ? -1 : 1));
// If a.name is greater than b.name, it returns -1, meaning a should come before b in the sorted array.
// The sort function compares strings lexicographically (based on Unicode values).
// Since the comparison is set to return -1 when a.name is greater, it effectively sorts the array in descending order.
    
//     As a result, "Google" comes first, followed by "Facebook", and then "Apple".
    
    console.log(companies);

//output
[
  { id: '3', name: 'Google' },
  { id: '1', name: 'Facebook' },
  { id: '2', name: 'Apple' }
]

let a=[1,3,2]

a.sort((a,b)=>a>b?-1:1) // a.sort((a,b)=>b-a) both are same

console.log(a)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(typeof 42); // number
console.log(typeof "Hello"); // string
console.log(typeof true); //boolean
console.log(typeof [1, 2, 3]); //objet
console.log(typeof { name: "John", age: 25 });//objet
console.log(typeof null);//objet
console.log(typeof undefined); // undefined
console.log(typeof function () {}); // function
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(getType(42));
console.log(getType("Hello"));
console.log(getType(true));
console.log(getType([1, 2, 3]));
console.log(getType({ name: "John", age: 25 }));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType(function () {}));

//answer

function getType(value) {
  // Check for null first, as typeof null returns "object"
  if (value === null) {
    return "null";
  }
  // Check for array using Array.isArray
  if (Array.isArray(value)) {
    return "array";
  }
  // Return the type using typeof for all other cases
  return typeof value;
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function calculateSum() {
  console.log(result);
  var num1 = 5;
  let num2 = 10;
  const num3 = 15;
  var result = num1 + num2 + num3;
}

calculateSum(); // undefined
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let x = 10;

function updateX() {
  if (true) {
    let x = 20;
    console.log(x); //20
  }
  console.log(x); //10
}

updateX();
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const person = {
  name: "John",
  age: 30,
};

Object.freeze(person); // in seal we can modify existing obj
person.age = 40;

console.log(person.age); // 30
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let x = 10;

function outer() {
  console.log(x); // undefined
// Hoisting: Inside the outer function, the statement var x = 20; is hoisted to the top of the function. This means that before the function executes, JavaScript knows that x will be declared in this scope, but it doesn't assign it a value until that line is executed.
  if (false) {
    var x = 20;
  }
}

outer();


// modified to get console
let x = 10;

function outer() {
  console.log(x); // This will log 10

  if (false) {
    let x = 20; // This creates a block-scoped variable
  }
}

// var ki ayithe call cheyakapoyina aa scope lo unte consider chestundi

outer(); // Output will be 10

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const obj = {
  a: 1,
  b: 2,
  c: {
    a: 3,
    b: 4,
  },
};

const {
  a,
  b,
  c: { a: nestedA },
} = obj;

console.log(a, b, nestedA); // 1 2 3
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function* generatorFunction() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generatorFunction();

console.log(generator.next()); //{ value: 1, done: false }
console.log(generator.next()); //{ value: 2, done: false }
console.log(generator.next()); //{ value: 3, done: true }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

(function(){
  var a = b = 3;
})();
// var a = 3; declares a variable a within the function's scope.
// b = 3; does not have a var, let, or const keyword in front of it. As a result, b becomes a global variable (if it wasn't already declared in a broader scope).
console.log(a) // error
console.log(b) // 3
console.log("a defined? " + (typeof a !== 'undefined')); //false
console.log("b defined? " + (typeof b !== 'undefined')); //true
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // bar
        console.log("outer func:  self.foo = " + self.foo);// bar
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // undefined
            console.log("inner func:  self.foo = " + self.foo);// bar
        }());
    }
};
myObject.func();function foo1()
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------{
  return {
      bar: "hello"
  };
}

function foo2()
{ 
  return //This function appears to return an object, but due to automatic semicolon insertion, JavaScript interprets the return statement as return; followed by the object on the next line.As a result, foo2 effectively returns undefined instead of the object.
  {
      bar: "hello"
  };
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

1
4
3
2
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log(arr1) //[ 'n', 'h', 'o', 'j', [ 'j', 'o', 'n', 'e', 's' ] ]
console.log(arr2) //[ 'n', 'h', 'o', 'j', [ 'j', 'o', 'n', 'e', 's' ] ]
console.log(arr3) //[ 'j', 'o', 'n', 'e', 's' ]
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); //array 1: length=5 last=j,o,n,e,s
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); //array 2: length=5 last=j,o,n,e,s
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(1 +  "2" + "2"); //'122'
console.log(1 +  +"2" + "2"); // "32" . + converts string to num
console.log(1 +  -"1" + "2"); //"02" The unary negation operator - converts the string "1" to a number and then negates it, resulting in -1.
console.log(+"1" +  "1" + "2"); //"112"
console.log( "A" - "B" + "2"); // "NaN2"
console.log("A" - "B" + 2); // NaN

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("0 || 1 = "+(0 || 1)); // 1 . false or true. so because of or condtions returns 1
console.log("1 || 2 = "+(1 || 2)); // 1. at the first time itself true. so returns 1
console.log("0 && 1 = "+(0 && 1)); // 0. first itself (false AND ) fails in AND condition 
console.log("1 && 2 = " + (1 && 2)); // 2 
console.log(false == '0') // true
console.log(false === '0') //false
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
(function(x) {
    return (function(y) {
        console.log(x); //1
    })(2)
})(1);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); //undefined
console.log(hero.getSecretIdentity()); //John Doe

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter+= i;
}
console.log(counter); //55
console.log(i); //11

// After the loop, i will be 11 because the loop condition i <= 10 fails when i is incremented after the last iteration.
// i++ appudu i 11 avutundi

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const object1 = {
  a: 10,
  b: 20,
  c: function () {
	console.log(this.a + this.b);
  },
};
const func = object1.c;
func(); // undefined + undefined results in NaN
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- const person = {
  firstName: "Helen",
  lastName: "Ryan",
  getFullName: function () {
	return this.firstName + " " + this.lastName;
  },
};
console.log(person.getFullName()); // Helen Ryan

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const promise1 = Promise.resolve("One");
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 1000));
const promise3 = Promise.reject("Three");
 Promise.allSettled([promise1, promise2, promise3]).then((results) => console.log(results));

 node /tmp/dMfAv9NWSe.js
[
  { status: 'fulfilled', value: 'One' },
  { status: 'fulfilled', value: 'Two' },
  { status: 'rejected', reason: 'Three' }
]

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const testArray = [1, 2, 3, 4, 5];
const res = testArray.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    return acc + curr; // Add current number to accumulator if it's even
  }
  return acc; // Return accumulator unchanged if current number is odd
}, 0); // Initial value of accumulator is 0

console.log(res); // Output the result


Iteration 1: curr = 1, odd → acc remains 0
Iteration 2: curr = 2, even → acc becomes 0 + 2 = 2
Iteration 3: curr = 3, odd → acc remains 2
Iteration 4: curr = 4, even → acc becomes 2 + 4 = 6
Iteration 5: curr = 5, odd → acc remains 6

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = array1
array2.push(7, 8, 9, 10)
console.log(array1)  // [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
console.log(array2.sort()) // [1, 10,2, 3, 4, 5, 6,7, 8, 9]
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function checkNum(num) {
    return num >= 4;
}

let newArray1 = [array.map((item) => {
    return item
})].filter(checkNum)

let newArray2 = array.filter(checkNum).map((item) => {
    return item
})

console.log(newArray1)  //[] . becuase [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]].filter kabatti ivvatledhu. 
console.log(newArray2) //[4,5,6,7,8,9,10]

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function setName() {
   this.name = 'devkode';
}
setName();
console.log(this.name); // undefined . becuase here this indicates window

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const animal = {
  animal_name: "cat",
  action: function () {
    console.log(`${this.animal_name} is doing action`);
  }
};

setTimeout(animal.action, 1000); //undefined is doing action

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const animal = {
  animal_name: "cat",
  action: function () {
    console.log(`${this.animal_name} is doing action`);
  }
};

let func = animal.action.bind(animal);
setTimeout(func, 1000); // cat is doing action
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let arr = Array.from(Array(10).keys());
console.log(arr) //[0,1,2,3,4,5,6,7,8,9]
function func(a) {
  console.log(arguments.length); 
}
func(arr); //1
func(...arr); //10
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(typeof foo); // function 

function foo() {
  return "bar";
}
var foo = "bar";
// The function foo is hoisted to the top, so foo is initially defined as a function.
// The variable var foo; is also hoisted, but it does not override the existing foo function declaration.
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function foo(x) {
  x();

  function x() {
    console.log("foo"); // this will execute because function checks its own scope var s first
  }
}

foo(function() {
  console.log("bar")
});

// answer will be foo

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
foo();

function foo() {
  console.log(1);
}

var foo = function() {
  console.log(2);
};

function foo() {
  console.log(3);
}

foo();

// this will change to like this after hoisting. declartions are oved to top

function foo() {
  console.log(1);
}
function foo() {
  console.log(3);
}
// so remaining will get below after declartions movd
foo();  //3
var foo = function() {
  console.log(2);
};
foo(); //2

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var a = 10;
console.log("line number 2", a);

function fn() {
  console.log("line number 4", a);
  var a = 20;
  a++;
  console.log("line number 7", a);
  if (a) {
    var a = 30;
    a++;
    console.log("line number 11", a);
  }
  console.log("line number 13", a);
}
fn();
console.log("line number 2", a);

line number 2 10
line number 4 undefined
line number 7 21
line number 11 31
line number 13 31
line number 2 10 //The behavior of the var keyword in JavaScript can be a bit tricky due to hoisting and scope. Let’s clarify why the variable a in the function does not affect the global variable a, even though it’s declared with var.
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- function greet(person) {
  if (person == { name: 'Narendra Modi' }) { // for obje or array even we use == it checks reference thats why this condtion is failing
    return 'hey Narendra Modi'
  } else {
    return 'hey Donald Trump'
  }
}

console.log(greet({ name: 'Narendra Modi' })) //hey Donald Trump
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let setTimeoutResolveReject = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("YES");
	}, 3000);
	setTimeout(() => {
		reject("NO")
	}, 2000);
});

setTimeoutResolveReject
.then((msg) => {
	console.log(msg);
})
.catch((err) => {
	console.log(err);
})

// "NO" , settimeout rendu sarlu call avutundi but promise rendu sarlu avvadhu so anduke yes print avvadhu
// Key Point: A promise can only be settled once, meaning it can either be resolved or rejected, but not both. In this case, the first operation that settles the promise (the reject operation after 2 seconds) takes precedence.


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
new Promise((resolve, reject) => {
  console.log(4)
  resolve(5)
  console.log(6)
}).then(() => console.log(7))
.catch(() => console.log(8))
.then(() => console.log(9))
.catch(() => console.log(10))
.then(() => console.log(11))
.then(console.log)
.finally(() => console.log(12))

node /tmp/HSPO839slt.js
4
6
7
9
11
undefined
12

// msg laga call chesthe 5 console ayedhi
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const promise_1 = Promise.resolve('First');
const promise_2 = Promise.resolve('Second');
const promise_3 = Promise.reject('Third');
const promise_4 = Promise.resolve('Fourth');

const runPromises = async () => {
	const res1  = await Promise.all([promise_1, promise_2])
	const res2  = await Promise.all([promise_3, promise_4]) 
	return [res1, res2];
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))

// third
    

// In the runPromises function, you first await Promise.all([promise_1, promise_2]), which will resolve to ['First', 'Second'] because both promise_1 and promise_2 are resolved.
//     Next, you try to await Promise.all([promise_3, promise_4]).However, since promise_3 rejects, the entire Promise.all will reject immediately without waiting for the other promises(in this case, promise_4) to resolve.
// You call runPromises(), and since the second Promise.all rejects, the promise returned by runPromises() will also reject.
// The error will be caught in the .catch() block, logging the rejection reason.

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('initial');
setTimeout(function() {
   console.log('setTimeout');
}, 0);
var promise = new Promise(function(resolve, reject) {
   resolve();
});
promise.then(function(resolve) {
   console.log('1st Promise');
})
.then(function(resolve) {
   console.log('2nd Promise');
});
console.log('final');

// node /tmp/aPOKIvVY5k.js
// initial
// final
// 1st Promise
// 2nd Promise
// setTimeout

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1; // here we called using let, so new count is created
    console.log(count); //1
  }
  console.log(count); //0
})();

let count = 0;
(function immediate() {
  if (count === 0) {
     count = 1; //here it will update existing count
    console.log(count); //1
  }
  console.log(count); //1 
})();
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function foo() {
  let a = b = 0;
  a++;
  return a;
}
foo();
console.log(typeof a) // undefined
console.log(typeof b) // number
// b = 0; assigns 0 to b, but since b is not declared with let, const, or var, it is implicitly created as a global variable. This is due to JavaScript's behavior of creating undeclared variables in the global scope.
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let x = false;
let y = "0";
let z = 0;

console.log(x == y); // true
console.log(x == z); //true
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let x = "5";
let y = 2;

console.log(x + y); //52
console.log(x - y); //3
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let x = [];
let y = [];
let z = x + y;

console.log(typeof z); // string

//  In JavaScript, when you use the + operator with two arrays, or an array and any other object, both operands will be converted to strings before concatenation occurs. This is called implicit type coercion.


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function foo(a, b) { 
  console.log(arguments[1]); //5. we can use inbuilt arguments property
}

foo(3,5);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let x = "false";
let y = !x;

console.log(y); // false

// In this code, x is a string containing the value “false”. When you use the logical NOT operator (!) with a non-Boolean value, JavaScript will first convert the value to a Boolean and then negate it. Since “false” is a non-empty string, it is considered a truthy value when converted to Boolean, so !x will be the same as !true, which is false.
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let x = 1;
let y = "1";

console.log(++x, ++y); // 2 2
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let x = { a: 1, b: 2 };
let y = { b: 3 };
let z = { ...x, ...y };

console.log(z); //{ a: 1, b: 3 }
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let x = 1;

console.log(x + x++); // 2 not 3.  It evaluates x++, which also returns 1 (since it's postfix, the increment happens after the value is used).
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let x = 7;
let y = !!x && !!!x;

console.log(y); //In this code, the !! operator is used to convert the value of x to a boolean. The first ! operator negates the value of x and returns false since x is a non-zero number. The second ! operator negates the boolean value false, so it becomes true.

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let a = 10;
let b = (a, a + 10);

console.log(b); // 20
// n this code, the comma operator, is used to evaluate two expressions: first, the expression a, which has the value 10, and then the expression a + 10, which has the value 20.

// The comma operator evaluates both expressions but returns only the value of the second expression (a + 10), which is 20. Therefore, the value of b is 20.
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let x = 018;
let y = 015;

console.log(x - y); //5

// In this code, the variables x and y are assigned values in octal (base 8) notation because the leading zero in a numeric literal in JavaScript indicates that the number is in octal notation. 

// However, starting with ECMAScript 2015 (ES6), the use of a leading zero to denote an octal number literal is deprecated in strict mode and will cause a SyntaxError when encountered. So, to avoid confusion, it’s recommended to avoid using leading zeros in numeric literals. 

// The values of x and y are 18 and 13 in decimal (base 10) notation, respectively. 

// The expression x – y subtracts the value of y from the value of x. Therefore, x – y is equivalent to 18 – 13, which evaluates to 5. 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var obj = {
  value: 42,
  getValue: function() {
    return this.value;
  }
};

var getValue = obj.getValue; // to fix this var getValue = obj.getValue.bind(obj);
console.log(getValue()); // undefined
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value); //1
console.log(gen.next().value); //2
console.log(gen.next().value); //3
console.log(gen.next().value); //undefined

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const object = {
  who: 'World',

  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    return `Goodbye, ${this.who}!`;
  }
};

console.log(object.greet());    //Hello, World!
console.log(object.farewell()); // Goodbye, undefined!

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog'; // no issue because  This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let number = 0;
console.log(number++); // 0. postfix returns the same value and increase the count. so return value will be same so return 0
console.log(++number); //2  here already number is increased by one in above line. here ++ increases another value and returns new value . so return 2
console.log(number);//2

function getPersonInfo(one, two, three) {
  console.log(one); //[ '', ' is ', ' years old' ]
  console.log(two); //Lydia
  console.log(three); //21
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`; // it will be like getPersonInfo(['', ' is ', ' years old'], 'Lydia', 21);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj); // { a: "three", b: "two" } not { b: "two", a: "three" }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

console.log(name.giveLydiaPizza()) //"Just give Lydia pizza already!"
// String is a built-in constructor, that we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();

// First Third Second . We have a setTimeout function and invoked it first. Yet, it was logged last.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
!!null; //null is falsy. !null returns true. !true returns false.
!!''; //"" is falsy. !"" returns true. !true returns false.
!!1; //1 is truthy. !1 returns false. !false returns true.
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item); //"name", "age"
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const num = parseInt('7*6', 10);  //7
// Only the first number in the string is returned. Based on the radix (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the parseInt checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.

// * is not a valid number. It only parses "7" into the decimal 7. num now holds the value of 7.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------[1, 2, 3].map(num => {
  if (typeof num === 'number') return;
  return num * 2;
});

[undefined, undefined, undefined]

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Car() {
  this.make = 'Lamborghini';
  return { make: 'Maserati' };
}

const myCar = new Car();
console.log(myCar.make); // maserati. by default em return cheyakapothe this return chestundi but ikkada manam intentionally return chestunnam kabatti return chestundi consider chestundi
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

(() => {
  let x = (y = 10);

    // this is euqals to
    // y = 10; // this become global
    // let x=y
})();

console.log(typeof x); // undefined . because of block scope
console.log(typeof y); // number
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog('Mara'); 

pet.bark(); // woof iam mara

delete Dog.prototype.bark;

pet.bark(); // typeerror

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------// counter.js
let counter = 10;
export default counter;

// index.js
import myCounter from './counter';

myCounter += 1;

console.log(myCounter); // error . imported values can read only

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const name = 'Lydia';
age = 21;

console.log(delete name); // false . let , const,var tho initialize chesinavi delete cheyalemu anduke false return chesindi. delete ayithe true and delete avvakapothe false return chestundi

console.log(delete age); // true. age anedhi windows ki assign chestunnam so we can delete here
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y); //1 . to get all it should be like [...y] or [y1,y2,y3,y4,y5]
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const person = { name: 'Lydia' };

Object.defineProperty(person, 'age', { value: 21 });

console.log(person);// { name: "Lydia", age: 21 }
console.log(Object.keys(person)); // ["name"]
// With the defineProperty method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the defineProperty method, they are by default not enumerable. The Object.keys method returns all enumerable property names from an object, in this case only "name".

// Properties added using the defineProperty method are immutable by default. You can override this behavior using the writable, configurable and enumerable properties. This way, the defineProperty method gives you a lot more control over the properties you're adding to an object.


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ['level', 'health']); // given instruction to which keys only need to stringify
console.log(data); // "{"level":19, "health":90}".

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1); //10 . post ++ returns the initial value but it will increase the variable by 1 so num=11, return value will be 10 which is intial value
console.log(num2); //10 . // in the function we are using num1=10 so num2 also be 10 becuase it is also calling by ++
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[1, 2, 3, 4].reduce((x, y) => console.log(x, y)); //1 2 and undefined 3 and undefined 4

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;

// running sum.js, running index.js, 3
// With the import keyword, all imported modules are pre-parsed. This means that the imported modules get run first, and the code in the file that imports the module gets executed after.

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(Number(2) === Number(2)); //true
console.log(Boolean(false) === Boolean(false)); //false
console.log(Symbol('foo') === Symbol('foo')); //true
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
async function getData() {
  return await Promise.resolve('I made it!');
}

const data = getData(); // await use cheyaledhu kabatti
console.log(data); //Promise { <pending> }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const { firstName: myName } = { firstName: 'Lydia' };

console.log(firstName); // reference error

const { firstName } = { firstName: "Lydia" }; console.log(firstName)// this is correct way 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this)); //With the call method, we can change the object to which the this keyword refers. In functions, the this keyword refers to the the object that the function belongs to. We declared the setTimeout function on the global object, so within the setTimeout function, the this keyword refers to the global object. On the global object, there is a variable called status with the value of "😎". When logging this.status, "😎" gets logged.
}, 0); 

// "🥑" and "😎"
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('I want pizza'[0]); // "I"
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function sum(num1, num2 = num1) {
  console.log(num1 + num2); // 20 You can set a default parameter's value equal to another parameter of the function, as long as they've been defined before the default parameter. 
}

sum(10);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function addToList(item, list) {
  return list.push(item); // 2 function ni return chestunte length return chestundi . adey manaki list kavali ante adi vero variable tho call chesi danini return cheyali li=list.push(item); return li
}

const result = addToList('apple', ['banana']);
console.log(result); // 2

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let newList = [1, 2, 3].push(4);
console.log(newList) //4 
console.log(newList.push(5)); // error . 4 ki 5 push avvadhu

// correct way of code 
let newList = [1, 2, 3];
newList.push(4);
console.log(newList); // [1, 2, 3, 4]

newList.push(5);
console.log(newList); // [1, 2, 3, 4, 5]
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function giveLydiaPizza() {
  return 'Here is pizza!';
}

const giveLydiaChocolate = () =>
  "Here's chocolate... now go hit the gym already.";

console.log(giveLydiaPizza.prototype); //{ constructor: ...} regular functions will have prototype
console.log(giveLydiaChocolate.prototype); // undefined . arrow functions dont have regular expressions
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y); //name Lydia and age 21
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getItems(fruitList, ...args, favoriteFruit) { // syntax error 
    // ...args is a rest parameter. The rest parameter's value is an array containing all remaining arguments, and can only be the last parameter! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")  

// correct way 
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(['banana', 'apple'], 'pear', 'orange');
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function nums(a, b) {
  if (a > b) console.log('a is bigger');
  else console.log('b is bigger');
  return // js automatic ga bydefault ; include chestundi manam pettalsina pani ledhu. so it will consider as return; . so anduke undefined return chestundi
  a + b;
}

console.log(nums(4, 2)); //a is bigger, undefined
console.log(nums(1, 2)); //b is bigger, undefined
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age } // to fix the error we need to write in () . ({ name: user.name, age: user.age })

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list)) // [ 1, [ 2, 3, 4 ] ]
console.log(getUser(user)) //error
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;

console.log(one, two, three); // {},"",[]

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Promise.resolve(5); //Promise {<fulfilled>: 5}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(`${(x => x)('I love')} to program`);  //I love to program
// Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function (x => x)('I love') in this case. We pass the value 'I love' as an argument to the x => x arrow function. x is equal to 'I love', which gets returned. This results in I love to program.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ['pink', 'red', 'blue'];

console.log(colorConfig.colors[1]); // typeerror because there is no colors in the colorConfig
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let config = {
  alert: setInterval(() => {
    console.log('Alert!');
  }, 1000),
};

config = null;

// The setInterval callback will still be called every second
// Normally when we set objects equal to null, those objects get garbage collected as there is no reference anymore to that object. However, since the callback function within setInterval is an arrow function (thus bound to the config object), the callback function still holds a reference to the config object. As long as there is a reference, the object won't get garbage collected. Since this is an interval, setting config to null or delete-ing config.alert won't garbage-collect the interval, so the interval will still be called. It should be cleared with clearInterval(config.alert) to remove it from memory. Since it was not cleared, the setInterval callback function will still get invoked every 1000ms (1s).

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const name = 'Lydia Hallie';

console.log(!typeof name === 'object'); //false
console.log(!typeof name === 'string'); //false
console.log(typeof name !== 'object'); //true
console.log(typeof name !== 'string'); // false
// typeof name returns "string". The string "string" is a truthy value (true ), so !typeof name returns the boolean value false. false === "object" and false === "string" both returnfalse.


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const person = {
  name: 'Lydia Hallie',
  address: {
    street: '100 Main St',
  },
};

Object.freeze(person);

// in the freeze we can do modify the children obj. example : person.address.street = "101 Main St"
// The Object.freeze method freezes an object. No properties can be added, modified, or removed.

// However, it only shallowly freezes the object, meaning that only direct properties on the object are frozen. If the property is another object, like address in this case, the properties on that object aren't frozen, and can be modified.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
class Counter {
  #number = 10

  increment() {
    this.#number++
  }

  getNum() {
    return this.#number
  }
}

const counter = new Counter()
counter.increment()

console.log(counter.#number) //syntax error
// In ES2020, we can add private variables in classes by using the #. We cannot access these variables outside of the class. When we try to log counter.#number, a SyntaxError gets thrown: we cannot access it outside the Counter class!
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
	if (num) count += 1
})

console.log(count) //3
// JavaScript treats 0 as a falsy value, so if (0) will be false, and count will not be incremented.
// The values 1, 2, and 3 are truthy, so the condition if (num) will be true for them, and count will be incremented by 1 each time.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const arr1 = [1,2,3];
const arr2 = [1,2,3];
const str = "1,2,3";

console.log(arr1 == str); //true Javascript compiler performs type conversion. In this case, it converts the array arr1 and the string str to their string representations and then compares them.
console.log(arr1 == arr2); // for arrays checks reference so false

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const arr = [11, 0, '', false, 2, 1];
const filtered = arr.filter(Boolean);
console.log(filtered); // [11, 2, 1]

//  filter(Boolean) removes all falsy values (0, "" (empty string), false, null, undefined, and NaN) from the array and keeps truthy ones.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const arr = ["A","B","C","D","E"]
console.log(Object.keys(arr));  //[ '0', '1', '2', '3', '4' ]

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(typeof NaN); // number
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log([] == ![]); //true
// in js empty array[] is truly value!truly = false; i., ![]=false ; false chered to 0
// now[] is converted to string while comparing with ==; When using == (loose equality), JavaScript attempts to convert both sides of the comparison to the same type before comparing them.
// Next, it attempts to convert the empty array [] to a number. An empty array, when converted to a primitive, becomes an empty string "", and an empty string "" is coerced to 0 when converted to a number.


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log('1' - - '1'); //2 .
 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(!!null); //false
console.log(!!undefined); //false
// Uses the double negation (!!) to convert values to their boolean equivalents. Both null and undefined are falsy values, so the output for both lines is false.
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
