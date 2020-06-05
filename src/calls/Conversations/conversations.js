/* eslint-disable no-restricted-syntax */
import _ from 'lodash'
import conversationChoices from './conversationChoices'

let answer

function takeConversation(message) {
  // ignore all messages of the bot itself
  if (message.author.bot) return
  // check if the messages starts with an !
  if (_.startsWith(message.content, '!ego')) {
    for (const choice of conversationChoices) {
      if (choice.msg === message.content) {
        answer = choice.answer
        break
      } else {
        answer = 'Das verstehe ich nicht!'
      }
    }
    // eslint-disable-next-line consistent-return
    return message.reply(answer)
  }
}

export default {
  takeConversation,
}
