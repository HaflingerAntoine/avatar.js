const Discord = require('discord.js');

const { prefix, version, couleur } = require('../config.json')

module.exports.run = async(client, message, args) =>{

    let avatarTag = message.mentions.users.first() || message.author;

    message.channel.send(` :eyes: Voici l'avatar de **${avatarTag.tag}**`)

    let avatar = new Discord.MessageEmbed()
        .setImage(avatarTag.displayAvatarURL())
        .setColor(couleur)
        .setFooter(version)
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription("[Lien vers l'avatar](" + avatarTag.displayAvatarURL() + ")");

    message.channel.send(avatar)


}

module.exports.help = {
    name:'avatar',
    aliases: ['avatar'],
    category: 'information',
    description: "Montre l'avatar ",
    cooldown: 10,
}