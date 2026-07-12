str = "Hello World";

// * at -- returns value at the index (works for - as well) (undefined for index not present)
console.log(str.at());
console.log(str.at(8));
console.log(str.at(-9));

// * charAt -- returns value at the index, null for not present index , negative index also returns null
console.log(str.charAt(9));
console.log(str.charAt(19));
console.log(str.charAt());

// * charCodeAt -- CHAR TO ASCII (default 0th index)  , returns NAN for index not found (negative also returns NaN)
console.log(str.charCodeAt());
console.log(str.charCodeAt(-3));
console.log(str.charCodeAt(12));

// * codePoint --  CHAR TO ASCII (default 0th index)  , returns undefined for index not found (negative also returns NaN)
console.log(str.codePointAt());
console.log(str.codePointAt(12));
console.log(str.codePointAt(-12));

// * trim
data = " harsh  patel  ";
console.log(data.trim() + ".");
console.log(data.trimStart() + ".");
console.log(data.trimEnd() + ".");

// * pad
console.log(str.padStart(15, "#"));
console.log(str.padEnd(15, "#"));

// * repeat
console.log(str.repeat(3));

// * replace
console.log(str.replace("e", "o"));
console.log(str.replace("o", "x"));

// * replaceAll
console.log(str.replaceAll("o", "x"));

// * split -- will convert string into array based on the seperator
data = "Harsh Vasu Dev";
console.log(data.split(" "));
console.log(data.split(" ", 4)); // ,ax limit to store in array

// * concat
str1 = "Hello";
str2 = " World";
console.log(str1.concat(str2));
console.log(str1.concat(str2, data));

// * substring -- returns part of string and does not works in negative
console.log(data.substring());
console.log(data.substring(1, 3));
console.log(data.substring(1, 8));
console.log(data.substring(1, 8));
console.log(data.substring(-1, -2));

// * slice -- returns part of string and works in negative
console.log(data.slice());
console.log(data.slice(5));
console.log(data.slice(1, 8));
console.log(data.slice(-3));


