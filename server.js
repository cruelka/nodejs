var Username = require('./user');

function run(){
var ildar =new Username("Ильдар");
var hui =new Username("Вадим");
}

if (module.parent) {
	exports.run = run;
} else {
	run();
}
;
ildar.hello(hui);