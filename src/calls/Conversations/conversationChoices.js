const conversationChoices = [
  {
    msg: '!ego ping',
    answer: 'pong',
  },
  {
    msg: '!ego hi',
    answer: 'hi',
  },
  {
    msg: '!ego Wie geht es dir?',
    answer: 'Gut und dir?',
  },
  {
    msg: '!ego lol',
    answer: 'LOL',
  },
  {
    msg: '!ego Uhrzeit',
    answer: `Es ist ${new Date().getHours()}:${new Date().getMinutes()} Uhr`,
  },
  {
    msg: '!ego Datum',
    answer: `Wir haben den ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
  },
  {
    msg: '!ego Was ist 1+1',
    answer: '3',
  },
]

export default conversationChoices
