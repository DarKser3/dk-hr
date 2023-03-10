import { getInfo, getuserdetail, login } from '@/api/user'
import { getToken, setToken, removeToken, settimekey } from '@/utils/auth'
export default {
  namespaced: true,
  state: { token: getToken(),
    userinfo: {

    }},
  mutations: {
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    removeToken(state) {
      state.token = null
      removeToken()
    },
    setuserinfo(state, result) {
      state.userinfo = result
    },
    removeuserinfo(state) {
      state.userinfo = {}
    }
  },
  actions: {
    async login(context, data) {
      const result = await login(data)

      context.commit('setToken', result)
      settimekey()
    },
    async getuserinfo(context) {
      const result = await getInfo()
      const bascinfo = await getuserdetail(result.userId)
      const obj = { ...result, ...bascinfo }

      context.commit('setuserinfo', obj)
      return result
    },
    logout(context) {
      context.commit('removeToken')
      context.commit('removeuserinfo')
    }
  }

}

