const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  name: state => state.user.userinfo.username,
  userId: state => state.user.userinfo.userId

}
export default getters
