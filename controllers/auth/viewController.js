const userViews = {
  signUp(req, res) {
    res.render('auth/SignUp')
  },
  signIn(req, res) {
    res.render('auth/SignIn')
  },
  apiAuth(req, res) {
    res.json({ user: req.user, token: res.locals.data.token })
  },
  redirectToLogin(req, res) {
    res.redirect('/users/login')
  }
}

module.exports = userViews
