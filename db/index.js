var phrases;
exports.connect = function() {
	phrases = require('./tr');
};

exports.getPhrases = function(name){
	if (!phrases[name]){
		throw new Error("Нет такой фразы " + name);
	}
	return phrases[name];
	};
