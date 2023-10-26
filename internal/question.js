const sender = require('./sender.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ansired = '\x1b[31m';
const ansigreen = '\x1b[32m';

const questions = [
	'Webhook URL', //0
	'UserName(option)', //1
	'avatarURL(option)', //2
	'Embed Title', //3
	'Description (option)', //4
	'Color (If not entered, it will be #0x404eed.)', //5
	'Author (option)', //6
	'Footer (option)', //7
];

const answers = [];
const fields = [];

function showResult() {
	console.log('='.repeat(30));
	for (let i = 0; i < questions.length; i++) {
		if (answers[i] === '') {
		  answers[i] = 'Not entered'
		}
		console.log(`${questions[i]} => ${answers[i]}`);
	console.log('='.repeat(30));
	}
}

function fields() {
	console.log("called!");
	rl.question('Create Fields? [y/n]' + " >> ", (answer) => {
		if (answer === 'y') {
			//TODO: やれ
		};
		if (answer === 'n') {
			showResult();
		};
}),

function askQuestion(index) {
	if (index === questions.length) {
	  // 5つの質問が終了したら、回答を出力してプログラムを終了
		fields();
	  }
	  rl.close();
	  sender.send(questions, answers);
	}
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

module.exports = {
	askQuestion,
};