function Username (name) {
	this.name=name;
}
Username.prototype.hello = function(who) {
	console.log("hello " + who.name);
};


console.log("User is required");

exports.Username = Username;