const sender = require('./sender.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ansired = '\x1b[31m';
const ansigreen = '\x1b[32m';

const questions = [
	'1. Webhook URL',
	'2. Embed Title',
	'3. Description (none if not entered.)',
	'4. Color (If not entered, it will be #0x404eed.)',
	'5. Author (none if not entered.)',
	'6. Field (none if not entered.)',
	'7. Footer (none if not entered.)',
];

const answers = [];

function askQuestion(index) {
	if (index === questions.length) {
	  // 5つの質問が終了したら、回答を出力してプログラムを終了
	  console.log('='.repeat(30));
	  for (let i = 0; i < questions.length; i++) {
		if (answers[i] === '') {
			answers[i] = 'Not entered'
		}
		console.log(`${questions[i]} => ${answers[i]}`);
	  }
	  console.log('='.repeat(30));
	  rl.close();
	  sender.send(questions, answers);
	} else {
	  rl.question(`${questions[index]}` + " >> ", (answer) => {
		if (index === 0) {
			if (!answer.startsWith("https://discord.com/api/webhooks/")) {
				console.log(`${ansired}Invalid input. Please try again.\x1b[37m`)
				askQuestion(0)
			};
		};
		if (index === 1) {
			if (answer === '') {
				console.log(`${ansired}Invalid input. Please try again.\x1b[37m`)
				askQuestion(1)
			};
		};
		if (index === 2) {
			if (!answer.startsWith("#")) {
				answer = '#0x404eed'
			};
		};
		answers.push(answer);
		askQuestion(index + 1);
	  });
	}
}

module.exports = {
	askQuestion,
};