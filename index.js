var DNA = require("organic").DNA;
var Cell = require("organic").Cell;

var dna = new DNA({
	membrane: {
		Server: {
			source: "membrane.Server"
		}
	},
	plasma: {
		Router: {
			source: "plasma.Router"
		},
		CSS: {
			source: "plasma.CSS",
			file: "./css/styles.css"
		},
		Render: {
			source: "plasma.Render",
			templates: "./tpl/"
		}		
	}
});

var cell = new Cell(dna);