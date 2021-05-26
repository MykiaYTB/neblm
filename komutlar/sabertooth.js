const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazın**  <a:google:846624949707210802>`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/867bea51-793c-4b09-b13f-44c9053b6754/logo?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const narcosembed = new Discord.MessageEmbed()
  .setTitle("Logo Generator")
  .setColor("7289da")
  .setImage(linqo)
  message.channel.send(narcosembed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'sabertooth',
    description: 'Yazdığınız yazıyı pembe logoya değiştirir.',
    usage: 'sabertooth'
}