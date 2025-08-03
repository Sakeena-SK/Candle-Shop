exports.showLogin = (req, res) => {
  res.render('auth/customer/SignIn')
}

exports.showRegister = (req, res) => {
  res.render('auth/customer/SignUp')
}
