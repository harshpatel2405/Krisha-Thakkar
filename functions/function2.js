// * default params
function greet(name = "User") {
  console.log("Welcome, " + name);
}
greet();
greet("Harsh");

function add(b, c, a = 10) {
  console.log(a + b + c);
}

add(5);
add(5, 4);
add(5, 4, 3);

