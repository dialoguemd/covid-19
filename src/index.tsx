import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import { CSSProp } from 'styled-components/macro'

import './services/i18n'

import './polyfill'
import App from './app'
import * as serviceWorker from './service-worker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}
