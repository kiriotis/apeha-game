const kek = { name: "kek", age: 123 };

let copy = { ...kek };
copy.name = "lol";
console.log(copy);
console.log(kek);

// let button = document.getElementById("button");

// button.addEventListener("click", function () {
// 	let str = getSelection().anchorNode;
// 	console.log(str);
// 	if (getSelection().toString() != null) {
// 		getSelection().anchorNode.parentElement;
// 		console.log(getSelection().anchorNode.parentElement);
// 	}
// 	let str2 = getSelection().anchorNode.parentElement;
// 	console.log(str2);
// });
