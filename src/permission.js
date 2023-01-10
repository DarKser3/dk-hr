import nProgress from 'nprogress'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'
const whitelist = ['/login', '/404']
router.beforeEach(async(to, from, next) => {
  nProgress.start()
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.state.user.userinfo.userId) {
        await store.dispatch('user/getuserinfo')
      }
      next()
    }
  } else {
    if (whitelist.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
  nProgress.done()
})
router.afterEach(() => {
  nProgress.done()
})
