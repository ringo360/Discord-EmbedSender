const ansired = '\x1b[31m';
const ansigreen = '\x1b[32m';

function send(questions, answers) {
	console.log("Called!")
	for (let i = 0; i < questions.length; i++) {
		if (answers[i] === '') {
			answers[i] = 'Not entered'
		}
		console.log(`${questions[i]} => ${answers[i]}`);
	  }
}

module.exports = {
	send,
};