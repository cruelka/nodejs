var db = require('db');

function Username (name) {
	this.name=name;
}
Username.prototype.hello = function(who) {
	console.log(getPhrases.Hello + " " + who.name);
};


console.log("User is required");

module.exports = Username;