const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazınız...**  <a:B_Loading:839910133931704320>`)
  const linqo = `https://habbofont.net/font/battlebanzai/${yazi}.gif`
  .replace(' ', '+')

  
  const narcosembed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("7289da")
  .setImage(linqo)
  .setFooter('Anime Font Logo Oluşturuldu')
  message.channel.send(narcosembed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'anime',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'anime'
}