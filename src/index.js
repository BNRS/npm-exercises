const $ = require('jquery');
const data = require('./say-hello.js');
const hello = require('./say-hello.js');
// test //
$('body').html('Run es6 on older browsers and devices!');

// test //
const sayHello = name => {
    const greeting = 'Hello,  ' + name + '!';
    return greeting;
};
console.log(sayHello('ben'));

// from data require //
console.log(data.whichSideOfTheForce); // outputs "The Dark Side"

// from niceMessage require //
hello(); // 'It works!!'


