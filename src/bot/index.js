const { Client, Intents, MessageEmbed } = require('discord.js');
const env = require('dotenv').config();
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const token = process.env.TOKEN;

client.once('ready', () => {
	console.log('Ready!');
    client.user.setPresence({
        status: "online",  
        game: {
            name: "your assignments",  
            type: "LISTENING" 
        }
    });
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
        ping = 69;
		await interaction.reply(`Pong! ${ping} ms`)
        .catch(await interaction.reply("Google servers appear to be down. Try again later"))
	}
});

client.login(token);
