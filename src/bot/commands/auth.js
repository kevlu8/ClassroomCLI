const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('authenticate')
		.setDescription('Logs into your Google account so that you can use the classroom commands'),
	async execute(interaction) {
		await interaction.reply({ content: `Please log in using the following link: `, ephemeral: true });
	},
};