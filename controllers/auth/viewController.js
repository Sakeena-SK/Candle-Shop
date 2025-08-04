const RESOURCE_PATH = '/category'
const viewController = {
   signUp(req, res, next){
    res.render('auth/signUp')
  },
   signIn(req, res, next){
    res.render('auth/signIn')
  },
   apiAuth(req, res, next){
    res.json({user: req.user, token: res.locals.data.token})
  },
  redirectToLogin(req, res, next){
    res.redirect('/users/login')
  }
}
module.exports = viewController