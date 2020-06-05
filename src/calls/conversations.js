function takeConversation(msg) {
  if (msg.content === 'ping') {
    msg.reply('pong')
  }
}

const conversationChoices = [
  {

  },
]

module.exports = { takeConversation }
