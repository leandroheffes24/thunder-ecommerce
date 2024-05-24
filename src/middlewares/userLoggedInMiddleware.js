function userLoggedInMiddleware (req, res, next) {
    if(req.session && req.session.userLoggedIn){
        res.locals.userLoggedIn = true
    } else {
        res.locals.userLoggedIn = false
    }
    next()
}

module.exports = userLoggedInMiddleware