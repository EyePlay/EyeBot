const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'who is fake') {
        message.reply('you are fake');
        //message.channel.sendMessage('pong')
    }

    else if(message.content == 'ok') {
        message.reply('actually, it is not ok');
    }
})
client.login(process.env.BOT_TOKEN);
