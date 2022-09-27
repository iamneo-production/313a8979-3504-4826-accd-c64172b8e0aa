const check = require('express-validator')
exports.signupValidation = [
    check('name','Name is required').not().isEmpty(),
    check('email','Please include a valid email').normalizeEmail({gmail_remove_dots :true}),
    check('password',"Password must be a 6 or more characteres")
]
exports.loginValidation = [
    check('email','Please include valid email').normalizeEmail({gmail_remove_dots:true}),
    check('password','Password must be 6 or more character').isLength({min:6})
]