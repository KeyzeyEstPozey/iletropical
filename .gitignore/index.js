const Discord = require('discord.js');


var bot = new Discord.Client();
var prefix = ("/");
var dispatcher;

let options = {
    total: "735462858866819124",
};
  
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: "L'île Tropical🏝", type: 0} });
    console.log("Je suis connecté !");
});

bot.login('.Xxcf1Q.8AnpXteQGBbg0OAAlUrDdhVRNXQ');

bot.on('message', message => {
    if (message.content === '/ping'){
        message.reply("pong !");
        console.log('ping pong')
};




  if (message.content === prefix + "boost"){
      var boost = new Discord.RichEmbed()
          .setTitle('Les Boost')
          .setColor('PURPLE')
          .setDescription('Hey ! Voici les récompense de boost (pour recupérer vos lots allez mp kirua')
          .addField('1 boost', "Un rôle plus haut que les membres, et la perm logs.")
          .addField('2 boost', "Un rôle plus haut que les membres, et la perm photo pour pouvoir mettre des images dans tous les salons + 1 pulsar.")
          .addField('3 boost', "Un rôle plus haut que les membres, les perm voc et emoji + 2 pulsar.")
          .setFooter("Boost | L'île Tropical")
      message.channel.send(boost);
      console.log("boost fait");
    }  

  if (message.content === prefix + "recrutement"){
      var recrutement = new Discord.RichEmbed()
          .setColor('PURPLE')
          .addField("**RECRUTEMENTS STAFF :**", "**Voici comment se passent les recrutements dès-à-présent :﻿**")
          .addField(":question: ﻿Condition pour etre staff :", "13 ans minimum.﻿")
          .addField("Mettre ﻿﻿discord.me/iletropical en status.﻿", "・ Voici le formulaire : https://forms.gle/GhVF5vzXaWuDEWo16")
          .setFooter("Recrutements | L'île Tropical")
      message.channel.send(recrutement);
      console.log("recrutement fait");
    }



});

client.on("guildMemberAdd", (member) => {
        //All choices are optional here. Bot wont work if the channel ID's are wrong. How to properly get ID's read in README.md 
        try {
            member.guild.channels.get(options.total).setName(`🌴・Membres : ${member.guild.memberCount}`); // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
        
        }
        catch (e) {
        Console.log(e);
        }
  });
client.on("guildMemberRemove", (member) => {
        //All choices are optional here. Bot wont work if the channel ID's are wrong. How to properly get ID's read in README.md 
        try {
            member.guild.channels.get(options.total).setName(`🌴・Membres : ${member.guild.memberCount}`);
        }
        catch (e) {
        Console.log(e);
        }
});





