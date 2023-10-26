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
	'2. UserName',
	'3. avatarURL(option)',
	'4. Embed Title',
	'5. Description (option)',
	'6. Color (If not entered, it will be #0x404eed.)',
	'7. Author (option)',
	'8. Footer (option)',
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
		if (index === 3) {
			if (answer === '') {
				console.log(`${ansired}Invalid input. Please try again.\x1b[37m`)
				askQuestion(1)
			};
		};
		if (index === 5) {
			console.log("colorcheck")
			if (answer === '') {
				answer = 0x404eed
			};
			let CC = parseInt(answer, 16);
			if (isNaN(CC)) {
				console.error("無効なカラーコードを確認しました。")
				console.log(`color: ${CC} / ${answer}`)
			}
		};
		answers.push(answer);
		askQuestion(index + 1);
	  });
	}
}

module.exports = {
	askQuestion,
};