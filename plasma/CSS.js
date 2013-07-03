var Chemical = require("organic").Chemical;
var Organel = require("organic").Organel;
var util = require("util");
var fs = require('fs');

module.exports = function CSS(plasma, config) {
	Organel.call(this, plasma);

	var cssStyles = fs.readFileSync(config.file).toString();

	var self = this;
	this.on("page", function(chemical) {
		self.emit(new Chemical({
			type: "css",
			value: cssStyles
		}));
		return false;
	});

}

util.inherits(module.exports, Organel);