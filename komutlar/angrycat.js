const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazınız...**  <a:B_Loading:839910133931704320>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/065b4535-d123-4261-accb-2f21e3eac3cf/logo?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const narcosembed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("7289da")
  .setImage(linqo)
  .setFooter('Altın Logo Oluşturuldu')
  message.channel.send(narcosembed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'cat',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'cat'
}