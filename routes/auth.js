const router = require('express').Router();

//app.use('/api/resgister'
router.post('/register', (req, res) => {
    res.send('register');
})

module.exports = router;