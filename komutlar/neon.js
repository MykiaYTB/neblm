const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazınız...**  <a:maple_leaf:742698148329291826>`)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=neon-logo&text=${yazi}`
  .replace(' ', '+')

  
  const narcosembed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("7289da")
  .setImage(linqo)
  .setFooter('neonlu Logo Oluşturuldu')
  message.channel.send(narcosembed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'neon',
    description: 'Yazdığınız yazıyı neon logoya değiştirir.',
    usage: 'neon'
}