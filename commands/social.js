const Command = require('./command')

module.exports = class Social extends Command{

    static match(message) {
        return message.content.startsWith('s!social')
    }

    static action(message) {
        message.reply([
            'https://www.facebook.com/assoshiawa',
            'https://twitter.com/SHIAWA810',
            'https://www.instagram.com/shiawaofficiel/'
        ]).then(function (res) {
            message.delete()
        }).catch(console.error)

    }
}