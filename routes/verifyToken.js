<<<<<<< HEAD
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied');
    try{
        const verifed = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = verifed;
        next();
    }
    catch (err){
        res.status(400).send('Invalid Token');
    }
    
=======
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied');
    try{
        const verifed = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = verifed;
        next();
    }
    catch (err){
        res.status(400).send('Invalid Token');
    }
    
>>>>>>> 8d377c5b2452b43ce4358a39842860f5f370805c
}