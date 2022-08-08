const { CommandInteraction, MessageEmbed } = require("discord.js");


module.exports = {
	name: "Staff-Updates",
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
			name: "choices",
			description: "The user to add to saying afk",
			type: "STRING",
			required: true,
      choices: [
                {
                    name: 'forecast',
                    value: 'forecast'
                },
 
                {
                    name: 'current',
                    value: 'current'
                }
            ]
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
		const chosenString = interaction.options.getString("choices")
		const mentionable = interaction.options.getMentionable('mentionable');
		AddChoices("Joined", joined)
		AddChoices("Promote", promoted)
    AddChoices("Demote", demoted)
    AddChoices("Resign", resigned)
    AddChoices("Blacklisted", blacklisted)
    interaction.reply({ content: `${interaction.options.getUser('user')} has been to ${interaction.options.getString('choices')} to ${interaction.options.getUser('role')}`})
	},
};
