const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Checks latency between the bot and Google\'s API'),
	async execute(interaction) {
        //Send a GET request to google.com
        const start = Date.now();
        await fetch('https://google.com');
        const end = Date.now();
        const googleping = end - start;
		await interaction.reply({ content: `Pong! ${googleping} ms.`, ephemeral: true });
	},
};