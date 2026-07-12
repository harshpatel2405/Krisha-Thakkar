/*
 * 1. Username Generator
 * A company asks users to enter their full name.
 *
 * Generate a username by:
 *
 *            Removing extra spaces.
 *            Converting everything to lowercase.
 *            Taking the first name.
 *            Appending the birth year.
 */
name = "    Harsh Jayeshkumar Patel    ";
dob = 2004;

// name = name.trim();
trimmed_name = "";
for (let char of name) {
  if (char == " ") continue;
  trimmed_name += char;
}

console.log(trimmed_name);
// name = name.toLowerCase();
lowercase_string = "";
for (let index in trimmed_name) {
  let ele = trimmed_name.charCodeAt(index);
  if (ele >= 65 && ele <= 90) {
    ele += 32;
  }

  lowercase_string += String.fromCharCode(ele);
}
console.log(lowercase_string);

// let first_name = "";

// for (let i = 0; i < name.length; i++) {
//   if (name[i] == " ") break;
//   first_name += name[i];
// }

// username = "@" + first_name;
// username = username.concat(dob);
// console.log(username);
