const router = require('express').Router();

router.get('/users',(req, res) => {
    console.log('user get works');
    res.status(200).end();
});

module.exports = router;

/*
router.get('/users/:id',(req, res) => {
    console.log('/user get works');
    res.status(200).end();
});
*/
