const authorize = (req,res,next) => {
    const {user} = req.query
    if (user === 'erica') {
        req.user = {name:'erica',id:2}
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
    console.log('authorize')
    next()
}

module.exports = authorize