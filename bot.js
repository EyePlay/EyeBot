const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is up and running!');
});

client.on('message', message => {
    if (message.content == 'ping') {
    	message.reply('pong');
  	}
     else if(message.content == 'who is fake') {
        message.channel.sendMessage('you are fake')
    }
});

client.login(process.env.BOT_TOKEN);
