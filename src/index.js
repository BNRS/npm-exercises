const $ = require('jquery');

$('body').html('hello everyone!');


const sayHello = name => {
    const greeting = 'Hello,  ' + name + '!';
    return greeting;
};

console.log(sayHello('ben'));
