const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../controllers/admin.service');

module.exports = jwt;

function jwt() {
    console.log("JWT Called")
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/feedback/authenticate',
            '/feedback/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};