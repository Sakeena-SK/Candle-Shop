const RESOURCE_PATH = '/product'
const viewController = {
  signUp(req, res, next){
    res.render('/auth/SignUp')
  },
  signIn(req, res, next){
    res.render('/auth/SignIn')
  },
  index(req, res, next){
    res.render('product/Index', {
      ...res.locals.data,
      user: req.user
    })
  },
  show(req, res, next){
    res.render('product/Show', {
      ...res.locals.data,
      user: req.user
    })
  },
  edit(req, res, next){
    res.render('product/Edit', {
      ...res.locals.data,
      user: req.user
    })
  },
  newView(req, res, next){
    res.render('product/New', {
      ...res.locals.data,
      user: req.user
    })
  },
  redirectHome(req, res, next){
    if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`)
    }else {
      res.redirect(RESOURCE_PATH)
    } 
  },
   redirectShow(req, res, next){
     if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}/${req.params.id}?token=${res.locals.data.token}`)
    }else {
      res.redirect(`${RESOURCE_PATH}/${req.params.id}`)
    } 
  }
}

module.exports = viewController