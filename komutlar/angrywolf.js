const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazınız...**  <a:B_Loading:839910133931704320>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/6458e177-55ec-4b2d-8be7-4094431378ad/logo?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const narcosembed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("7289da")
  .setImage(linqo)
  .setFooter('Alevli Logo Oluşturuldu')
  message.channel.send(narcosembed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'angrywolf',
    description: 'Yazdığınız yazıyı alev logoya değiştirir.',
    usage: 'angrywolf'
}