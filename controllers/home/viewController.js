const home = (req, res) => {
    res.render('layouts/home', res.locals.data)
}

module.exports = { home }