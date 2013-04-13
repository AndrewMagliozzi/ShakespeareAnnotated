var fs = require('fs');

var file = fs.readFileSync('./okfn_fc_annotations_full.json',['utf8','r']);
var newFile = fs.openSync('./new_annotations.json','w',['utf8']);
var JSONfile = JSON.parse(file);

for(var i in JSONfile) {
	var source = JSONfile[i]['_source'];
	console.log(JSONfile[i]);
	delete JSONfile[i]._source;
	var outputObject = {};
	outputObject['index'] = JSONfile[i];
	fs.appendFileSync('./new_annotations.json', JSON.stringify(outputObject) + '\n' + JSON.stringify(source) + '\n', ['utf8'])	;
}
