var Chemical = require("organic").Chemical;
var Organel = require("organic").Organel;
var util = require("util");

module.exports = function Router(plasma, config) {
	Organel.call(this, plasma);

	var self = this;
	this.on("request", function(chemical, sender, callback) {
		var page = chemical.req.url.substr(1, chemical.req.url.length);
		page = page == "" || page == "/" ? "home" : page;
		self.emit(new Chemical({
			type: "page",
			page: page,
			ready: callback
		}));
	});

}

util.inherits(module.exports, Organel);