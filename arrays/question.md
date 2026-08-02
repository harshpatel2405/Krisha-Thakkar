# JavaScript Mid-Level Problem: Chat Filtering System

## Problem Statement

You are developing a **Chat Moderation System** for a messaging application. The application receives multiple chat messages from users. Some words are considered inappropriate and must be filtered.

Write a JavaScript program that performs the following tasks.

---

## Input

```javascript
const chats = [
    "Hello everyone",
    "You are an idiot",
    "Have a nice day",
    "This game is stupid",
    "Good Morning",
    "You fool",
    "JavaScript is awesome"
];

const bannedWords = ["idiot", "stupid", "fool"];
```

---

## Requirements

### Part 1

Display all chat messages with numbering.

**Expected Output**

```text
1. Hello everyone
2. You are an idiot
3. Have a nice day
4. This game is stupid
5. Good Morning
6. You fool
7. JavaScript is awesome
```

---

### Part 2

Check every chat message.

If a message contains **any banned word**, replace that word with `"****"`.

**Example**

```text
You are an idiot
```

becomes

```text
You are an ****
```

---

### Part 3

Display only the clean messages.

Output should **not** contain any message that originally had a banned word.

---

### Part 4

Display the following statistics:

- Total Messages
- Clean Messages
- Blocked Messages

**Example**

```text
Total Messages : 7
Clean Messages : 4
Blocked Messages : 3
```

---

### Part 5

Display all blocked messages separately.

**Example**

```text
Blocked Messages

You are an idiot
This game is stupid
You fool
```

---

### Part 6

Display the filtered version of every message.

**Example**

```text
Hello everyone
You are an ****
Have a nice day
This game is ****
Good Morning
You ****
JavaScript is awesome
```

---

# Rules

❌ Do NOT use

- filter()
- map()
- reduce()
- some()
- every()
- Regular Expressions (Regex)

✅ Use

- Arrays
- Loops (`for`, `for...of`)
- Nested loops
- if statements
- String methods:
  - includes()
  - replace()
  - split()
  - join()
  - toLowerCase()

---

# Bonus Tasks (Hard Level)

### Task 1

Count how many times each banned word appears.

**Example**

```text
idiot : 1
stupid : 1
fool : 1
```

---

### Task 2

Find the most frequently used banned word.

**Example**

```text
Most Used Banned Word : idiot
```

---

### Task 3

Store every filtered message in a new array and display it.

---

### Task 4

Create a new array containing only blocked messages.

---

### Task 5

Display the percentage of blocked messages.

**Example**

```text
Blocked Percentage : 42.86%
```

---
