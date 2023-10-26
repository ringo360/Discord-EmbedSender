const ansired = '\x1b[31m';
const ansigreen = '\x1b[32m';

function send(questions, answers) {
	console.log("Called!")
	const webhookurl = answers[0]
	const title = answers[1]
	const desc = answers[2]
	const color = answers[3]
	const author = answers[4]
	const field = answers[5]
	const footer = answers[6]
	let webhookClient = new WebhookClient({ url: webhookurl });
	console.log("Sending Webhook...")
}

module.exports = {
	send,
};