var log = require('./logger')(module);
var db = require('db');
db.connect();

var Username = require('./user');

function run(){
var ildar =new Username("Ильдар");
var hui =new Username("Вадим");

ildar.hello(hui);
console.log(db.getPhrases("Runned"));
}

if (module.parent) {
	exports.run = run;
} else {
	run();
}
;
