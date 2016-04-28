var log = require('./logger')(module);
var db = require('db');

function Username (name) {
	this.name=name;
}
Username.prototype.hello = function(who) {
	log(db.getPhrases("Hello") + ", " + who.name);
};

module.exports = Username;