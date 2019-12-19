import './utils/bootstrap'
import './services/i18n'
import './styles/animate.css'
import './styles/reset.css'
import React from 'react'
import { hydrate, render } from 'react-dom'
import Routes from './Routes'
import * as serviceWorker from './serviceWorker'

const rootElement: HTMLElement | null = document.getElementById('root')

if (rootElement && rootElement.hasChildNodes()) {
  hydrate(React.createElement(Routes), rootElement)
} else {
  render(React.createElement(Routes), rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
