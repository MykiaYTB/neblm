const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`Botu Sunucunuza Davet Edin !`, `[Tıkla](https://discord.com/api/oauth2/authorize?client_id=761850917610979328&permissions=0&scope=bot)`)
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};