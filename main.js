const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// const rpcfunc = require('./internal/rpcfunc.js');

console.log("Welcome to DiscordEmbedSender!")
console.log("")
rl.question('Press any key to continue...', (ans) => {
	console.log(`detect: ${ans}`)
	rl.close
})

function ask(question)) {
	rl.question(`${question}\n` + '>> ', (ans) => {
		console.log(ans)
		const number = parseInt(ans);
	
		if (isNaN(number)) {
			console.log('Invalid input. Please enter a number(1~5)!')
		} else if (number >= 1 && number <= 5) {
			switch (number) {
				case 1:
					console.log("1");
					rpcfunc.create('test');
					break;
				/*
				case 2:
					console.log("2");
					rpcfunc.edit('test2')
					break;
				*/

				default:
					console.log(`detect ${number}`);
			}
		} else {
			console.log('Invalid input. Please enter a number(1~5)!')
		}
	})
}