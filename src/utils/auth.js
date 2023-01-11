import Cookies from 'js-cookie'

const TokenKey = 'dk-hr-token'
const timekey = 'dk-hr-key'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function gettimekey() {
  return Cookies.get(timekey)
}
export function settimekey() {
  Cookies.set(timekey, Date.now())
}
