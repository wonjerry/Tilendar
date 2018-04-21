const router = require('express').Router();

router.post('/register', require('./controller').register);

module.exports = router;