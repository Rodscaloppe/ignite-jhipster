const username = process.env.E2E_USERNAME || 'user';
const password = process.env.E2E_PASSWORD || 'user';

const navigateToLoginScreen = async () => {
  await expect(element(by.id('launchScreen'))).toBeVisible()
  await element(by.id('menuButton')).tap()
  await element(by.id('loginDrawerButton')).tap()
  await expect(element(by.id('loginScreenUsername'))).toBeVisible()
}

const loginAsUser = async () => {
  await navigateToLoginScreen()
  await element(by.id('loginScreenUsername')).replaceText(username)
  await element(by.id('loginScreenPassword')).replaceText(password)
  await element(by.id('loginScreenLoginButton')).tap()
  try {
    await expect(element(by.id('launchScreen'))).toBeVisible()
  } catch(e) {
    throw new Error('Logging into the JHipster backend failed, is it started?')
  }
}

const logout = async () => {
  await element(by.id('menuButton')).tap()
  await element(by.id('logoutDrawerButton')).tap()
}

const goBack = async () => {
  await element(by.id('backButton')).tap()
}

const scrollTo = async (fieldId, listId) => {
  await waitFor(element(by.id(fieldId))).toBeVisible().whileElement(by.id(listId)).scroll(50, 'down', 0.01, 0.01)
}

module.exports = {
  navigateToLoginScreen,
  loginAsUser,
  goBack,
  logout,
  scrollTo,
}
