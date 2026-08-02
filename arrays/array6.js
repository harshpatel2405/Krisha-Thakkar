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
  console.log(k++ + ". " + i);
}

/*
 * Check every chat message.
 *
 * If a message contains any banned word, replace * that word with "****".
 */
let blockedMessages = 0;
let cleanMessages = 0;
let totalMessages = 0;
let filteredChats = [];
for (let i of chats) {
  let words = i.split(" ");
  let filteredMessage = [];
  for (let j of words) {
    if (bannedWords.includes(j.toLowerCase())) {
      filteredMessage.push("****");
      continue;
    }
    filteredMessage.push(j);
  }
  totalMessages++;
  filteredChats.push(filteredMessage);
  if (filteredMessage.includes("****")) {
    blockedMessages++;
    continue;
  }
  cleanMessages++;
}

console.log("Total Messages (filtered Version) : " + totalMessages);
for (let i of filteredChats) {
  console.log(i.join(" "));
}

console.log("\n\nBlocked Messages : " + blockedMessages);
for (let i of filteredChats) {
  if (i.includes("****")) {
    console.log(i.join(" "));
  }
}

console.log("\n\nClean Messages : " + cleanMessages);
for (let i of filteredChats) {
  if (!i.includes("****")) {
    console.log(i.join(" "));
  }
}
