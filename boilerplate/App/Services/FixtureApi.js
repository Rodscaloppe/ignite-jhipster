export default {
  // Functions return fixtures

  // entity fixtures
  // ignite-jhipster-api-fixture-needle

  // auth fixtures
  login: (authObj) => {
    if (authObj.username === 'user' && authObj.password === 'user') {
      return {
        ok: true,
        data: require('../Fixtures/login.json')
      }
    } else {
      return {
        ok: false,
        status: 400,
        data: 'Invalid credentials'
      }
    }
  },
  register: ({user}) => {
    if (user === 'user') {
      return {
        ok: true
      }
    } else if (user === 'user-bad') {
      return {
        ok: false,
        data: 'Invalid email'
      }
    }
  },
  forgotPassword: () => {
    return {
      ok: true
    }
  },
  getAccount: () => {
    return {
      ok: true,
      status: 200,
      data: require('../Fixtures/getAccount.json')
    }
  },
  updateAccount: () => {
    return {
      ok: true
    }
  },
  changePassword: () => {
    return {
      ok: true
    }
  },
  setAuthToken: () => {

  },
  removeAuthToken: () => {

  }
}
