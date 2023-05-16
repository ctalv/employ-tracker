// require cli
const CLI = require('./scripts/cli.js')

// create object using cli class
const cli = new CLI();

// initiate application 
console.log(`
Welcome to Employee Manager!
`)
cli.init();