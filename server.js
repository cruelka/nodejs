function Username (name) {
	this.name=name;
}
Username.prototype.hello = function(who) {
	console.log("hello" + who.name);
};
var ildar =new Username("Ильдар");
var hui =new Username("Вадим");

Ildar.hello(hui);