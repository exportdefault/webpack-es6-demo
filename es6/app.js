import MyModule from './module.js';

let body = document.querySelector('body');
let message = new MyModule('ES6');
body.textContent = `Hello, ${message}!`;
console.log(`Hello, ${message}!`);