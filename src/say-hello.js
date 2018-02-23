const $ = require('jquery');

const data = {
    someNumber: 42,
    whichSideOfTheForce: 'The Dark Side',
    arnie: 'Get to da choppa!',
};
module.exports = data;

// export to index.js //
const hello = () => {
    return $("body").append("<h1>It works!!<h1>");
};

module.exports = hello;