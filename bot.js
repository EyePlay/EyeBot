const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'ping') {
        message.channel.sendMessage('pong')
    }   
});

client.login(process.env.BOT_TOKEN);

