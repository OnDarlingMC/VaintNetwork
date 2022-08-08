const { CommandInteraction, MessageEmbed } = require("discord.js");


module.exports = {
	name: "afk",
	description: "user afk on ticket",
	type: 'CHAT_INPUT',
	options: [
		{
			name: "user",
			description: "The user to add to saying afk",
			type: "USER",
			required: true
		},
		{
			name: "choice",
			description: "The user to add to saying afk",
			type: "boolean",
			required: true
		},
		{
			name: "role",
			description: "The user to add to saying afk",
			type: "mentionable",
			required: false
		}
	],
	/**
	 *
	 * @param {import("../..").Bot} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
   */
	run: async (client, interaction, args) => {
		const user = interaction.options.getUser('user');
		const boolean = interaction.options.getBoolean('choice');
		const mentionable = interaction.options.getMentionable('mentionable');
		.AddChoice("Joined", joined)
		.AddChoice("Promote", promoted)
            	.AddChoice("Demote", demoted)
            	.AddChoice("Resign", resigned)
            	.AddChoice("Blacklisted", blacklisted)
    interaction.reply({ content: `${interaction.options.getUser('user')} has been to ${interaction.options.getUser('choices')} to ${interaction.options.getUser('role')}`})
	},
};
