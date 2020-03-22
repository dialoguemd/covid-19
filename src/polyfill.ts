import * as Bowser from 'bowser'

const browser = Bowser.getParser(window.navigator.userAgent)

/*
  This hack fixes an issue in embedded mobile safari (on messenger) where scroll elements do not update
  click targeting positions. This results in the visual render and tap events not lining up, making it
  effectively frozen to the user.
*/
if (browser.is('mobile') && browser.is('safari')) {
  setInterval(() => {
    window.scroll({ left: 0 })
  }, 50)
}
