const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Vidoodle',
        tinder: 'Tinder',
        like: 'Like',
        message: 'Message'
    });
});

module.exports = router;
