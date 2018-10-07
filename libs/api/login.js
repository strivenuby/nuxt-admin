export function loginByUsername(username, password) {
  console.log(this.$axios)
  return this.$axios.$post({
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

export function logout() {
  return this.$axios.$post({
    url: '/user/logout'
  })
}

export function getUserInfo(token) {
  return this.$axios.$get({
    url: '/user/info',
    params: { token }
  })
}
