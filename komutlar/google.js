const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazınız...**  <a:B_Loading:839910133931704320>`)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=colored2-logo&text=${yazi}`
  .replace(' ', '+')

  
  const narcosembed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("7289da")
  .setImage(linqo)
  .setFooter('google Logo Oluşturuldu')
  message.channel.send(narcosembed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'google',
    description: 'Yazdığınız yazıyı google logoya değiştirir.',
    usage: 'google'
}