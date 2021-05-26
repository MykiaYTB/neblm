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
        .setDescription(`**<a:venuselmas:839405817555976203> | **${ayarlar.prefix}atam** : profil fotorafınıza atam efekti verir.\n **<a:venuselmas:839405817555976203> | **${ayarlar.prefix}azerbaycan** : profil fotorafınıza azerbaycan efekti verir.\n **<a:venuselmas:839405817555976203> | **${ayarlar.prefix}avatarım** : avatarı gösterir.\n **<a:venuselmas:839405817555976203> | **${ayarlar.prefix}bulanık** : profil fotorafınıza bulanık efekti verir.\n **<a:venuselmas:839405817555976203> | **${ayarlar.prefix}bravery** : profil fotorafınıza bravery efekti verir.\n **<a:venuselmas:839405817555976203> | **${ayarlar.prefix}event** : profil fotorafınıza event efekti verir.\n **<a:venuselmas:839405817555976203> | **${ayarlar.prefix}fb&gs** : profil fotorafınıza fb&gs efekti verir.\n **<a:venuselmas:839405817555976203> | **${ayarlar.prefix}hapishane** : Ayarlanabilir Kayıt Sistemi.\n **<a:venuselmas:839405817555976203> |**${ayarlar.prefix}pixel** : profil fotorafınıza pixel efekti verir.\n **<a:venuselmas:839405817555976203> |**${ayarlar.prefix}zıt-renk** : profil fotorafınıza zıt-renk efekti verir.\n **<a:venuselmas:839405817555976203> |**${ayarlar.prefix}wasted** : profil fotorafınıza wasted efekti verir.\n **<a:venuselmas:839405817555976203> |**${ayarlar.prefix}partner** : profil fotorafınıza partner efekti verir.\n **<a:venuselmas:839405817555976203> |**${ayarlar.prefix}rip** : profil fotorafınıza rip efekti verir`)  
    
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
  name: 'yardımav',
  description: 'yardımav',
  usage: 'yardımav'
};
