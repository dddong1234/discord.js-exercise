const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile')
		.setDescription("show bot's profile!"),
	async execute(interaction) {
        const {MessageEmbed, Channel} = require('discord.js')
		const exampleEmbed = new MessageEmbed
        
        Channel.send({ embeds: [exampleEmbed] });
        return interaction.reply('this is my profile')
	}
};