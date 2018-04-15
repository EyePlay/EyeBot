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
        message.channel.sendMessage({to: 432689272106123277, message: `${user.mention(264952723030409217)} is fake`});
    }
});

client.login(process.env.BOT_TOKEN);
