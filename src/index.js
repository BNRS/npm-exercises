const $ = require('jquery');

$('body').html('Run es6 on older browsers and devices!!!');


const sayHello = name => {
    const greeting = 'Hello,  ' + name + '!';
    return greeting;
};

console.log(sayHello('ben'));
