const chats = [
  "Hello everyone",
  "You are an idiot",
  "Have a nice day",
  "This game is stupid",
  "Good Morning",
  "You fool",
  "JavaScript is awesome",
];

const bannedWords = ["idiot", "stupid", "fool"];

// * Display all chat messages with numbering.
let k = 1;
for (let i of chats) {
  console.log(k++ + "." + i);
}

/*
 * Check every chat message.
 *
 * If a message contains any banned word, replace * that word with "****".
 */
let data
for (let i of chats) {
    data =""
  for (let j in bannedWords) {
    if (i.includes(j)) {
      data += "****"
      continue;
    }
    data += i
  }
  console.log(data )
}