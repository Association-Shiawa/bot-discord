const Discord = require('discord.js')

const config = require('./config/config.json')
const Google = require('./commands/google')
const Ping = require('./commands/ping')
const Play = require('./commands/play')
const Social = require('./commands/social')

const bot = new Discord.Client()

const TOKEN = config.private_api_key;

bot.on('ready', function () {
    console.log("Je suis connecté !")
    // bot.user.setAvatar('./avatar.png').catch(console.error)
    // bot.user.setGame('en pleine croissance').catch(console.error)
    // Set username
    // bot.user.setUsername('Menma-chan')
    // .then(user => console.log(`My new username is ${user.username}`))
    // .catch(console.error);

    // message.send('Ohayo mina-san ! Je susis votre petite maid :neptunegasm:')
})

bot.on('message', message => {
    let commandUsed =
        Google.parse(message)
        || Ping.parse(message)
        || Play.parse(message)
        || Social.parse(message)
})

bot.on('guildMemberAdd', member => {
    member.sendTyping().then(channel => {

    })
})

bot.login(TOKEN).then(function (res) {
    console.log(res);
})
