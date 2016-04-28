var db = require('db');

function Username (name) {
	this.name=name;
}
Username.prototype.hello = function(who) {
	console.log(db.getPhrase("Hello") + ", " + who.name);
};

module.exports = Username;