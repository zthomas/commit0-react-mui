import history from '../services/history'

export function push(uri) {
  history.push(uri)
}

export function to(uri) {
  return e => {
    e.preventDefault()
    history.push(uri)
  }
}

export default {
  history,
  push,
  to,
}
