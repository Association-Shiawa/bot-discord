const Command = require('./command')
const YoutubeStream = require('ytdl-core')

module.exports = class Play extends Command{

    static match(message) {
        return message.content.startsWith('s!play')
    }

    static action(message) {

        let voiceChannel = message.guild.channels
            .filter(channel => {return channel.type === 'voice'})
            .first()

        let args = message.content.split(' ')

        voiceChannel.join()
            .then(connection => {
                let stream = YoutubeStream(args[1])
                stream.on('error', () => {
                    message.reply("Cette vidéo n'est pas disponible")
                    connection.disconnect()
                })
                connection
                    .playStream(stream)
                    .on('end',() => {
                        connection.disconnect()
                    })
            })
            .catch(console.error)

        message.delete()
    }
}