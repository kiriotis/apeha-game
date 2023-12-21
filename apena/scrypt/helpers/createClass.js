// производит проверки при создании нового класса
export function createClass(params) {
	this.img = check("img", "string", params.img);
	this.class = check("class", "string", params.class);
	this.health = check("health", "number", params.health);
	this.mana = check("mana", "number", params.mana);
	this.physical_def = check("physical_def", "number", params.physical_def);
	this.magical_def = check("magical_def", "number", params.magical_def);
	this.skills = isArrayCheck("skills", params.skills);
}

// комбинирует проверки
function check(name, type, params) {
	checkRequired(name, params);
	checkType(name, type, params);
	return params;
}

// проверяет параметр на заполненность
function checkRequired(name, params) {
	if (!params) {
		throw new Error("Properties: '" + name + "' cannot be empty.");
	} else {
		return params;
	}
}

// проверяет параметр на соответствие типа
function checkType(name, type, params) {
	if (typeof params !== type) {
		throw new Error(
			"Create new class ERROR. Type of '" +
				name +
				"' props must be '" +
				type +
				"', not '" +
				typeof params +
				"'."
		);
	} else {
		return params;
	}
}

// проверяет на соответствие типу Array
function isArrayCheck(name, params) {
	if (!Array.isArray(params)) {
		throw new Error(
			"Create new class ERROR. Type of '" +
				name +
				"' props must be 'array', not '" +
				typeof params +
				"'."
		);
	} else {
		return params;
	}
}
