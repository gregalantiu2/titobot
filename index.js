const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.login(config.BOT_TOKEN);

//Bot Actions
const prefix = ";";
var botCommand = "";
var voting = false;
var users = [];
var games = [];


client.on("message", function(message) {
    if(analyzeReplies(message)){
        startEntries(message);

        if(message.content === ";pickgame")
        {
            message.channel.send(`Ok sobrinos, you have 30 seconds to enter in a game you want to play. Reply with ";" + game EXAMPLE: ;among us`);
        }

    }
    
});

//Action Methods
function startEntries(message){
    const filter = message => !message.author.bot && message.content !== ";pickgame";
    const collector = message.channel.createMessageCollector(filter, { time: 20000 });

    collector.on('collect', message => {
	    games.push(message.content);
    });

    collector.on('end', collected => {
	    message.channel.send(`The game you will you all will play is: ` + games[0].substring(1));
    });
}

//Helper Methods
function analyzeReplies(message){
    if (message.author.bot)
    {
        return false;
    }
    else if (!message.content.startsWith(prefix))
    {
        return false;
    }
    else{
        return true;
    }
}
function filterResponses(message,botCommand){
    return true;
}

