const express = require("express")
const router = express.Router()
const { Registre,Login,LoginAdmin} = require("../Controles/autoControls");
const { check } = require('express-validator')


router.post("/login",Login);
router.post("/register", [check('email', 'Not a valide email ').isEmail().normalizeEmail(), check('password', 'password should contiaint...').isStrongPassword(
    {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10, pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10
    })],Registre);

   
    router.post("/loginAdmin",LoginAdmin);

module.exports = router;