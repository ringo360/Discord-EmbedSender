const ansired = '\x1b[31m';
const ansigreen = '\x1b[32m';
const { WebhookClient } = require("discord.js");

function send(questions, answers) {
	console.log("Called!")
	const webhookurl = answers[0]
	const title = answers[1]
	const desc = answers[2]
	const color = answers[3]
	const author = answers[4]
	const field = answers[5]
	const footer = answers[6]
	const webhookClient = new WebhookClient({ url: webhookurl });
	console.log("Sending Webhook...")
	webhookClient.send({
		avatarURL: `https://cdn.discordapp.com/attachments/1134772607615508530/1149685246363717652/hoshimatisuisei.gif`,
		username: `EmbedSender Test`,
		embeds: [{
			title: title,
			description: desc,
			color: 0x404eed,
			fields: [{
				name: "test",
				value: "jsは女子小学生なのでtsはトランスジェンダーですね",
			}],
			footer: footer//,
			/*
			thumbnail: {
				url: thumbnail
		   }*/
		}]
	})
	console.log("Success!")
}

module.exports = {
	send,
};