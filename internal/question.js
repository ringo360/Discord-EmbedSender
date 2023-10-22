const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
	'Webhook URL',
	'Embed Title',
	'Description (none if not entered.)',
	'Color (If not entered, it will be #0x404eed.)',
	'Author (none if not entered.)',
	'Field (none if not entered.)',
	'Footer (none if not entered.)',
];

const answers = [];

function askQuestion(index) {
	if (index === questions.length) {
	  // 5つの質問が終了したら、回答を出力してプログラムを終了
	  console.log('Info:');
	  for (let i = 0; i < questions.length; i++) {
		console.log(`${questions[i]} => ${answers[i]}`);
	  }
	  rl.close();
	} else {
	  rl.question(`${questions[index]}` + "\n>> ", (answer) => {
		answers.push(answer);
		askQuestion(index + 1);
	  });
	}
}

module.exports = {
	askQuestion,
};