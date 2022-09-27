const logo = require('asciiart-logo');
const askMenuQuestion = require('./src/askQuestions.js');
const config = require('./package.json');

// render splash logo according to config of the application
console.log(logo(config).render());

askMenuQuestion();



