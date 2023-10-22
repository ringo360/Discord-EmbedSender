const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function modeselect() {
  console.log("a");
}

function ask(question) {
  rl.question(`${question}\n>> `, (ans) => {
    console.log(`ans: ${ans}`);
    if (ans === '') { 
      ask(question);
    } else {
      rl.close(); 
    }
  });
}

console.log("Welcome to DiscordEmbedSender!");
console.log("");

rl.question('Press any key to continue...', (ans) => {
  console.log(`detect: ${ans}`);
  rl.close(); 
});

console.log("loading");
ask("TEST");
