import Discord from 'discord.js'
import Dotenv from 'dotenv'
import Conversation from './calls/conversations'

Dotenv.config()

const client = new Discord.Client()

const { takeConversation } = Conversation


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', takeConversation)

client.login(process.env.CLIENT_TOKEN)
