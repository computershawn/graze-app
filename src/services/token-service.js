import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
  checkCreds(userName, password) {
    // This is for demo purposes only. Login creds should NOT be
    // stored inside config. We could move them into an .env file
    // for a little bit more security, but in production, user
    // creds would be stored in a database
    return (window.btoa(`${userName}:${password}`) === config.BUNK_AUTH)
  }
}

export default TokenService
