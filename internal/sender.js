const ansired = '\x1b[31m';
const ansigreen = '\x1b[32m';
const { WebhookClient } = require("discord.js");

function send(questions, answers) {
	console.log("Called!")
	// const webhookurl = answers[0] !== undefined && answers[0] !== "" ? answers[0] : "apple";
	const webhookurl = answers[0]
	const name = answers[1] !== undefined && answers[1] !== "" ? answers[1] : "EmbedSender";
	const iconurl = answers[2] !== undefined && answers[2] !== "" ? answers[2] : "https://cdn.discordapp.com/attachments/1134772607615508530/1149685246363717652/hoshimatisuisei.gif";
	const title = answers[3]
	const desc = answers[4]
	const color = answers[5]
	const author = answers[6]
	const footer = answers[7]
	const webhookClient = new WebhookClient({ url: webhookurl });
	console.log("Sending Webhook...")
	webhookClient.send({
		avatarURL: iconurl,
		username: name,
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