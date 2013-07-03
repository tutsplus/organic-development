var Chemical = require("organic").Chemical;
var Organel = require("organic").Organel;
var util = require("util");
var http = require('http');
var port = 3000;

module.exports = function Server(plasma, config) {
	Organel.call(this, plasma);

	var self = this;
	http.createServer(function(req, res) {
		console.log("request " + req.url);
    	self.emit(new Chemical({
    		type: "request",
    		req: req
    	}), function(html) {
    		res.writeHead(200);
        	res.end(html);
    	});
	}).listen(port, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:' + port + '/');

}

util.inherits(module.exports, Organel);