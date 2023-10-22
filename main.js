const v = '0.0.1-alpha';
const delay = (ms) => new Promise(resolve=>setTimeout(resolve,ms)) //*Thanks rasky1
const question = require('./internal/question.js')


async function start() {
	console.log(`Discord Embed Sender v.${v}`);
	console.log(`Created by ringoXD`)
	console.log("Please wait...")
	// await delay(3000);
	question.askQuestion(0);
}

start();
