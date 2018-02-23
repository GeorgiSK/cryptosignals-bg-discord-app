const Discord = require("discord.js");
const botSettings = require("./botsettings.json");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(bot.user.username);

    try{
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    }catch(e){
        console.log(e.stack);
    }

});

bot.login(botSettings.token);
