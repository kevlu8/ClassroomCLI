const { Client, Intents, MessageEmbed } = require('discord.js');
const env = require('dotenv').config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

const helpEmbed = new MessageEmbed()
	.setColor('#00ff00')
	.setTitle('Help')
	.setDescription('Ping - Check latency with Google\'s API\nHelp - Show this message')
	//.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	/*.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)*/
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
