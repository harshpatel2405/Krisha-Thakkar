num = [10, 20, 30, 40, 50];

ans = num.some((n) => n % 2 != 0);
console.log(ans);

ans = num.every((n) => n % 2 == 0);
console.log(ans);

// * check if any fruit is mango
// * check if any fruit is mango
let fruits = ["apple", "guava", "litchi", "mango", "orange"];
f = fruits.some((fr) => fr.toLowerCase() == "mango");
console.log("some: " + f);
g = fruits.every((fr) => fr.toLowerCase() == "mango");
console.log("every: " + g);

// * check if all strings are in lowercase or not
FirstName = ["krisga", "ayush", "shivansh", "dhruvi", "kanj", "Ariha", "Arth"];
fn = FirstName.some((f) => f == f.toLowerCase());
console.log("some: " + fn);
fi = FirstName.every((f) => f == f.toLowerCase());
console.log("every: " + fi);
