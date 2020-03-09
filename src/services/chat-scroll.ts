const TRIGGER_DELAY = 250
const BACKSCROLL_OFFSET = 10

export const getRscLastBotMessageEl = () => {
  const botMessages = document.querySelectorAll('.rsc-ts-bot')
  return botMessages[botMessages.length - 1]
}

export const getRscContentEl = () => document.querySelector('.rsc-content')

/*
  TODO: Implement better back-scroll mechanism. This approach will have some failures

  We will probably need to fork rsc in order to override the autoscroll behaviour:
  https://github.com/LucasBassetti/react-simple-chatbot/blob/73f94c63c09cab3fc43e93668b9121c07cd45bb5/lib/ChatBot.jsx#L174-L187

  Other option is to control height of last messages until the node insertion has run.
*/
export const scrollToLastBotMessage = () => {
  const rscContentEl = getRscContentEl()
  const rscLastBotMessage = getRscLastBotMessageEl()
  if (
    rscLastBotMessage instanceof HTMLElement &&
    rscContentEl instanceof HTMLElement
  ) {
    setTimeout(() => {
      rscContentEl.scrollTop = rscLastBotMessage.offsetTop - BACKSCROLL_OFFSET
    }, TRIGGER_DELAY)
  }
}
