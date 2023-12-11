const kek = { name: "kek", age: 123 }

let copy = { ...kek };
copy.name="lol"
console.log(copy);
console.log(kek);