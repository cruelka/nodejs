var db = require('db');

function Username (name) {
	this.name=name;
}
Username.prototype.hello = function(who) {
	console.log(translation.Hello + " " + who.name);
};


console.log("User is required");

module.exports = Username;