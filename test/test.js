var QUnit = require("steal-qunit");
var loader = require("@loader");

QUnit.module("system-define");

function fail(done){
	return function(err){
		QUnit.ok(false, err);
		done(err);
	}
}

QUnit.test("basics works", function(assert){
	var done = assert.async();
	var source = 'def' + 'ine(function(){\n' +
		'return function(){ return "bar"; };\n' +
		'});\n';

	loader._define("foo", source);

	loader.import("foo").then(function(fn){
		assert.equal(fn(), "bar", "got the correct definition");
	}).then(done, done);
});
