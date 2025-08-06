const home = (req, res) => {
    if (req.query.token) res.locals.data.token = req.query.token
    res.render('layouts/home', res.locals.data)
}

module.exports = { home }