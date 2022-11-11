module.exports = (req, res, next) => {
    if(!req.user) {
        return res.status(401).send({ rror: 'You must log in' })
    }

    next();
};