const Discord = require('discord.js');
const client = new Discord.Client({ intents: [
  "GUILDS",
  "GUILD_MEMBERS"
] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on("message", () => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
})

client.login(process.env.TOKEN)