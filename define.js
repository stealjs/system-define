
function addSystemDefine(loader){
	if(loader._extensions) {
		loader._extensions.push(addSystemDefine);
	}

	loader._definedModules = {};

	loader._define = function(name, source, load){
		load = load || {};
		load.source = source;
		this._definedModules[name] = load;
		return Promise.resolve();
	};

	var fetch = loader.fetch;
	loader.fetch = function(load){
		var dload = this._definedModules[load.name];
		if(dload) {
			return dload.source;
		}
		return fetch.apply(this, arguments);
	};
}

if(typeof System !== "undefined") {
	addSystemDefine(System);
}
