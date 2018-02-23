const $ = require('jquery');

const data = {
    someNumber: 42,
    whichSideOfTheForce: 'The Dark Side',
    arnie: 'Get to da choppa!',
};
module.exports = data;

// export to index.js //
const helloThere = () => $('body').append(`<h1>What a  nice message!</h1>`);
module.exports = helloThere;