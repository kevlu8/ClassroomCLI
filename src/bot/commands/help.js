const { MessageEmbed } = require('discord.js');

const helpEmbed = new MessageEmbed()
	.setColor('#00ff00')
	.setTitle('Help')
	.addFields(
		{ name: 'Help', value: 'Displays this help message', inline: true },
		{ name: 'Ping', value: 'Checks latency between the bot and Google\'s API', inline: true },
		{ name: 'placeholder', value: 'desc', inline: true },
	)
	.setTimestamp()

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get help'),
	async execute(interaction) {
		await interaction.reply({ embeds: [helpEmbed] });
	},
};