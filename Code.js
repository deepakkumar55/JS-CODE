// 1. Hello, World!

console.log("Hello, World!");


// 2. Variables and data types:

let name = "John";
const age = 25;
var isStudent = true;


// 3. Arithmetic operations:

let x = 10;
let y = 5;
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;


//4. Conditional statements:

let num = 10;
if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

// 5. Loops:

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}


// 6. Functions:

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John");


// 7. Arrays:

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);
console.log(numbers[0]);
numbers.push(6);
numbers.pop();


// 8. Objects:

let person = {
  name: "John",
  age: 25,
  isStudent: true,
};

console.log(person.name);
person.age = 26;


// 9. String operations:

let message = "Hello, World!";
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.substring(0, 5));


// 10. Event handling:

document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked");
});


// 11. DOM manipulation:

document.getElementById("myElement").innerHTML = "New content";


// 12. AJAX request:

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let response = JSON.parse(xhr.responseText);
    console.log(response);
  }
};
xhr.send();



// 11. Functions as First-class Citizens:


const multiply = function(x, y) {
  return x * y;
};

const result = multiply(5, 3);
console.log(result);  // Output: 15



// 12. Arrow Functions:

const greet = name => {
  console.log("Hello, " + name + "!");
};

greet("John");


// 13. Higher-Order Functions:

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num ** 2);
console.log(squared);  // Output: [1, 4, 9, 16, 25]


// 14. Closures:

const outer = () => {
  const message = "Hello";

  const inner = () => {
    console.log(message);
  };

  return inner;
};

const innerFunc = outer();
innerFunc();  // Output: "Hello"


// 15. Promises:

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data from server";
      resolve(data);
    }, 2000);
  });
};

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });


// 16. Async/Await:

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data from server";
      resolve(data);
    }, 2000);
  });
};

const getData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();


// 17. Modules (ES6):

// math.js
export const add = (x, y) => {
  return x + y;
};

export const subtract = (x, y) => {
  return x - y;
};

// app.js
import { add, subtract } from "./math.js";

console.log(add(5, 3));  // Output: 8
console.log(subtract(7, 2));  // Output: 5


// 18. Destructuring Assignment:

const person = {
  name: "John",
  age: 25,
  country: "USA"
};

const { name, age } = person;
console.log(name);  // Output: "John"
console.log(age);  // Output: 25


// 19. Spread Syntax:

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);  // Output: [1, 2, 3, 4, 5]

const person = { name: "John", age: 25 };
const newPerson = { ...person, country: "USA" };
console.log(newPerson);  // Output: { name: "John", age: 25, country: "USA" }


// 20. Rest Parameters:

const sum = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

console.log(sum(1, 2, 3));  // Output: 6
console.log(sum(4, 5, 6, 7));  // Output: 22


// 21. Template Literals:

const name

 = "John";
const message = `Hello, ${name}!`;
console.log(message);  // Output: "Hello, John!"


// 22. Default Parameters:

const greet = (name = "Anonymous") => {
  console.log("Hello, " + name + "!");
};

greet();  // Output: "Hello, Anonymous!"
greet("John");  // Output: "Hello, John!"


// 23. Class (ES6):

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, " + this.name + "!");
  }
}

const john = new Person("John");
john.greet();  // Output: "Hello, John!"


// 24. Inheritance (ES6):

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + " is eating.");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy");
dog.eat();  // Output: "Buddy is eating."
dog.bark();  // Output: "Woof!"


// 25. Error Handling:

try {
  // Code that might throw an error
  throw new Error("Something went wrong!");
} catch (error) {
  console.log(error.message);
}


// 26. Local Storage:

localStorage.setItem("name", "John");
const name = localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();


// 27. JSON:

const person = {
  name: "John",
  age: 25,
  isStudent: true
};

const json = JSON.stringify(person);
console.log(json);  // Output: '{"name":"John","age":25,"isStudent":true}'

const obj = JSON.parse(json);
console.log(obj.name);  // Output: "John"


// 28. Fetch API (GET request):

fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });


// 29. Fetch API (POST request):

const data = { name: "John", age: 25 };

fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });


// 30. Async Iteration (for-await-of):

const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
};

const processData = async () => {
  for await (const item of fetchData()) {
    console.log(item);
  }
};

processData();


// 31. Callback Functions:

const fetchData = (callback) => {
  setTimeout(() => {
    const data = "Data from server";
    callback(data);
  }, 2000);
};

fetchData(data => {
  console.log(data);
});


// 32. Immediately Invoked Function Expression (IIFE):

(function() {
  console.log("This function is immediately invoked.");
})();


// 33. Event Handling:

const button = document.getElementById("myButton");

const handleClick = () => {
  console.log("Button clicked");
};

button.addEventListener("

click", handleClick);


// 34. Event Delegation:

const parent = document.getElementById("parentElement");

const handleClick = (event) => {
  if (event.target.classList.contains("childElement")) {
    console.log("Child element clicked");
  }
};

parent.addEventListener("click", handleClick);


// 35. AJAX (Asynchronous  and XML):

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.example.com/data", true);

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};

xhr.send();


// 36. Timer Functions:

setTimeout(() => {
  console.log("Delayed message");
}, 2000);

setInterval(() => {
  console.log("Repeated message");
}, 1000);


// 37. Regular Expressions:

const pattern = /hello/i;
const str = "Hello, World!";

const result = pattern.test(str);
console.log(result);  // Output: true


// 38. Date and Time:

const now = new Date();
console.log(now);  // Output: current date and time

const year = now.getFullYear();
console.log(year);  // Output: current year

const month = now.getMonth();
console.log(month);  // Output: current month (0-11)


// 39. Math Object:

const number = 4.7;

console.log(Math.round(number));  // Output: 5
console.log(Math.floor(number));  // Output: 4
console.log(Math.ceil(number));  // Output: 5
console.log(Math.random());  // Output: random number between 0 and 1


// 40. Callbacks in Promises:

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data from server";
      resolve(data);
    }, 2000);
  });
};

const processData = (callback) => {
  fetchData()
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error);
    });
};

processData((error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});


// 41. Generators:

function* fibonacci() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();

console.log(fib.next().value);  // Output: 0
console.log(fib.next().value);  // Output: 1
console.log(fib.next().value);  // Output: 1
console.log(fib.next().value);  // Output: 2


// 42. Map:

const map = new Map();

map.set("name", "John");
map.set("age", 25);
map.set("isStudent", true);

console.log(map.get("name"));  // Output: "John"
console.log(map.has("age"));  // Output: true
map.delete("isStudent");
console.log(map.size);  // Output: 2


// 43. Set:

const set = new Set();

set.add("apple");
set.add("banana");
set.add("orange");

console.log(set.has("apple"));  // Output: true
console.log(set.size);  // Output: 3
set.delete("banana");
console.log(set.size); 

 // Output: 2


// 44. Array Methods:

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6, 8, 10]

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 15

const filtered = numbers.filter(num => num % 2 === 0);
console.log(filtered);  // Output: [2, 4]


// 45. String Methods:

const str = "Hello, World!";

console.log(str.length);  // Output: 13
console.log(str.toUpperCase());  // Output: "HELLO, WORLD!"
console.log(str.indexOf("o"));  // Output: 4
console.log(str.slice(7, 12));  // Output: "World"


// 46. Object Methods:

const person = {
  name: "John",
  age: 25,
  country: "USA"
};

const keys = Object.keys(person);
console.log(keys);  // Output: ["name", "age", "country"]

const values = Object.values(person);
console.log(values);  // Output: ["John", 25, "USA"]


// 47. Async Functions with Promise.all():

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data from " + url;
      resolve(data);
    }, 2000);
  });
};

const getData = async () => {
  const urls = ["https://api.example.com/data1", "https://api.example.com/data2"];
  const promises = urls.map(url => fetchData(url));
  const data = await Promise.all(promises);
  console.log(data);
};

getData();


// 48. Array Iteration (forEach):

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
  console.log(num);
});


// 49. Array Iteration (every):

const numbers = [1, 2, 3, 4, 5];

const allPositive = numbers.every(num => num > 0);
console.log(allPositive);  // Output: true


// 50. Array Iteration (some):

const numbers = [1, 2, 3, 4, 5];

const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative);  // Output: false


// 51. Array Iteration (find):

const numbers = [1, 2, 3, 4, 5];

const found = numbers.find(num => num > 3);
console.log(found);  // Output: 4


// 52. Array Iteration (findIndex):

const numbers = [1, 2, 3, 4, 5];

const index = numbers.findIndex(num => num > 3);
console.log(index);  // Output: 3


// 53. Array Iteration (filter):

const numbers = [1, 2, 3, 4, 5];

const filtered = numbers.filter(num => num % 2 === 0);
console.log(filtered);  // Output: [2, 4]


// 54. Array Iteration (map):

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 

2);
console.log(doubled);  // Output: [2, 4, 6, 8, 10]


// 55. Array Iteration (reduce):

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 15


// 56. Array Iteration (reduceRight):

const numbers = [1, 2, 3, 4, 5];

const concatenated = numbers.reduceRight((acc, num) => acc + num.toString(), "");
console.log(concatenated);  // Output: "54321"


// 57. Array Iteration (sort):

const numbers = [3, 1, 5, 2, 4];

numbers.sort((a, b) => a - b);
console.log(numbers);  // Output: [1, 2, 3, 4, 5]


// 58. Array Iteration (reverse):

const numbers = [1, 2, 3, 4, 5];

numbers.reverse();
console.log(numbers);  // Output: [5, 4, 3, 2, 1]


// 59. Array Iteration (slice):

const numbers = [1, 2, 3, 4, 5];

const sliced = numbers.slice(1, 4);
console.log(sliced);  // Output: [2, 3, 4]


// 60. Array Iteration (splice):

const numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 2);
console.log(numbers);  // Output: [1, 2, 5]


// 61. Array Iteration (forEach):

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
  console.log(num);
});


// 62. Array Iteration (every):

const numbers = [1, 2, 3, 4, 5];

const allPositive = numbers.every(num => num > 0);
console.log(allPositive);  // Output: true


// 63. Array Iteration (some):

const numbers = [1, 2, 3, 4, 5];

const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative);  // Output: false


// 64. Array Iteration (find):

const numbers = [1, 2, 3, 4, 5];

const found = numbers.find(num => num > 3);
console.log(found);  // Output: 4


// 65. Array Iteration (findIndex):

const numbers = [1, 2, 3, 4, 5];

const index = numbers.findIndex(num => num > 3);
console.log(index);  // Output: 3


// 66. Array Iteration (filter):

const numbers = [1, 2, 3, 4, 5];

const filtered = numbers.filter(num => num % 2 === 0);
console.log(filtered);  // Output: [2, 4]


// 67. Array Iteration (map):

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled);  // Output: [2, 

4, 6, 8, 10]


// 68. Array Iteration (reduce):

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 15


// 69. Array Iteration (reduceRight):

const numbers = [1, 2, 3, 4, 5];

const concatenated = numbers.reduceRight((acc, num) => acc + num.toString(), "");
console.log(concatenated);  // Output: "54321"


// 70. Array Iteration (sort):

const numbers = [3, 1, 5, 2, 4];

numbers.sort((a, b) => a - b);
console.log(numbers);  // Output: [1, 2, 3, 4, 5]


// 71. Array Iteration (reverse):

const numbers = [1, 2, 3, 4, 5];

numbers.reverse();
console.log(numbers);  // Output: [5, 4, 3, 2, 1]


// 72. Array Iteration (slice):

const numbers = [1, 2, 3, 4, 5];

const sliced = numbers.slice(1, 4);
console.log(sliced);  // Output: [2, 3, 4]


// 73. Array Iteration (splice):

const numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 2);
console.log(numbers);  // Output: [1, 2, 5]


// 74. Async/Await:

const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();


// 75. Promises:

const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });


// 76. Destructuring Objects:

const person = {
  name: "John",
  age: 25,
  country: "USA"
};

const { name, age } = person;
console.log(name);  // Output: "John"
console.log(age);  // Output: 25


// 77. Destructuring Arrays:

const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;
console.log(first);  // Output: 1
console.log(second);  // Output: 2
console.log(rest);  // Output: [3, 4, 5]


// 78. Spread Operator (Arrays):

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);  // Output: [1, 2, 3, 4, 5]


// 79. Spread Operator (Objects):

const person = { name: "John", age: 25 };
const

 newPerson = { ...person, country: "USA" };
console.log(newPerson);  // Output: { name: "John", age: 25, country: "USA" }


// 80. Classes:

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(5, 3);
console.log(rectangle.getArea());  // Output: 15



// 81. Promises (Chaining):

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data from server";
      resolve(data);
    }, 2000);
  });
};

fetchData()
  .then(data => {
    console.log(data);
    return "Processed data";
  })
  .then(processedData => {
    console.log(processedData);
  })
  .catch(error => {
    console.log(error);
  });


// 82. Error Handling:

try {
  // Code that may throw an error
  throw new Error("Custom error message");
} catch (error) {
  console.log(error.message);
}


// 83. JSON Parsing:

const jsonString = '{"name":"John","age":30,"city":"New York"}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData.name);  // Output: "John"


// 84. JSON Stringify:

const data = { name: "John", age: 30, city: "New York" };
const jsonString = JSON.stringify(data);
console.log(jsonString);  // Output: '{"name":"John","age":30,"city":"New York"}'


// 85. SetTimeout with Parameters:

const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

setTimeout(greet, 2000, "John");


// 86. Immediately Invoked Function Expression (IIFE):

(function () {
  // Code inside the IIFE
})();


// 87. Hoisting:

console.log(x);  // Output: undefined
var x = 5;


// 88. Arrow Functions:

const add = (a, b) => a + b;
console.log(add(2, 3));  // Output: 5


// 89. Template Literals:

const name = "John";
const age = 30;

console.log(`My name is ${name} and I'm ${age} years old.`);


// 90. Array Destructuring:

const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a);  // Output: 1
console.log(b);  // Output: 2
console.log(c);  // Output: 3


// 91. Object Destructuring:

const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(name);  // Output: "John"
console.log(age);  // Output: 30


// 92. Default Parameter Values:

const greet = (name = "Guest") => {
  console.log(`Hello, ${name}!`);
};

greet();  // Output: "Hello, Guest!"
greet("John");  // Output: "Hello, John!"


// 93. Rest Parameters:

const sum = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

console.log(sum(1, 2, 3));  // Output: 6
console.log(sum(4, 5));  // Output: 9


// 94. Spread Operator (Arrays):

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);  // Output: [1, 2, 3, 4, 5]




// 95. Spread Operator (Objects):

const person = { name: "John", age: 30 };
const newPerson = { ...person, city: "New York" };
console.log(newPerson);  // Output: { name: "John", age: 30, city: "New York" }


// 96. Map:

const map = new Map();
map.set("name", "John");
map.set("age", 30);

console.log(map.get("name"));  // Output: "John"
console.log(map.size);  // Output: 2

map.delete("age");
console.log(map.has("age"));  // Output: false

map.clear();
console.log(map.size);  // Output: 0


// 97. Set:

const set = new Set();
set.add(1);
set.add(2);
set.add(3);

console.log(set.size);  // Output: 3

set.delete(2);
console.log(set.has(2));  // Output: false

set.clear();
console.log(set.size);  // Output: 0


// 98. Try...Catch...Finally:

try {
  // Code that may throw an error
  throw new Error("Custom error message");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finally block executed");
}


// 99. Fetch API:

fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });


// 100. LocalStorage:


// Store data
localStorage.setItem("name", "John");
localStorage.setItem("age", 30);

// Retrieve data
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");

console.log(name);  // Output: "John"
console.log(age);  // Output: "30"

// Remove data
localStorage.removeItem("age");

// Clear all data
localStorage.clear();

