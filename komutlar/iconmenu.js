const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "+";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(` **Narcos Bot Yardım Menüsüne Hoşgeldiniz** `)
        .setDescription(`
  **<a:venuselmas:839405817555976203>  ${prefix}\`\`\alev\`\`\**  Logo Generator**
  **<a:venuselmas:839405817555976203>  ${prefix}\`\`\alev2\`\`\** Logo Generator**   
  **<a:venuselmas:839405817555976203>  ${prefix}\`\`bear\`\`\**  Logo Generator**
  **<a:venuselmas:839405817555976203>  ${prefix}\`\`\gökuş\`\`\** Logo Generator**   
  **<a:venuselmas:839405817555976203>  ${prefix}\`\`\sabertooth\`\`\**  Logo Generator**
  **<a:venuselmas:839405817555976203>  ${prefix}\`\`\pembe\`\`\** Logo Generator**  
  **<a:venuselmas:839405817555976203>  ${prefix}\`\`\altın\`\`\** Logo Generator** 
  **<a:venuselmas:839405817555976203>  ${prefix}\`\`\anime\`\`\** Logo Generator**  
  **<a:venuselmas:839405817555976203>  ${prefix}\`\`\google\`\`\**Logo Generator**  
  **<a:venuselmas:839405817555976203>  ${prefix}\`\`\odun\`\`\**  Logo Generator**
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**<a:okks:840163681689927690>  ${prefix}davet __Botu Davet Edebilirsiniz!__**



`)
        .setImage(`https://cdn.glitch.com/9dfd618f-445f-45c2-a525-10b7773dd15e%2Fvenusbanner1.png?v=1619623265358`)   
        .setThumbnail(`https://cdn.glitch.com/9dfd618f-445f-45c2-a525-10b7773dd15e%2Fgif2.gif?v=1619625712646`)
        .addField(` Logo Generator`, `  [Add Bot](https://discord.com/oauth2/authorize?client_id=645226005144797184&scope=bot&permissions=805314622) **|** [Vote](https://discord.gg/NMnPUjK) **|**[Support Server](https://discord.com/oauth2/authorize?client_id=645226005144797184&scope=bot&permissions=805314622) `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'iconmenu',
  description: 'logoları gösterir',
  usage: 'iconmenu'
};
