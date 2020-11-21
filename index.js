const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.login(config.BOT_TOKEN);

//Bot Actions
const prefix = "!";
var botCommand = "";

client.on("message", function(message) {
    analyzeReplies(message);
    
    botCommand = isolateCommand(message);

    if (botCommand === "ping") {
        message.reply(`Pong!`);
      }
});

//Helper Methods
function analyzeReplies(message){
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
}
function isolateCommand(message){
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    return command;
};