const Command = require('./command')

module.exports = class Ping extends Command{

    static match(message) {
        return message.content.startsWith('s!ping')
    }

    static action(message) {
        message.reply('pong !')
    }
}