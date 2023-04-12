const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('YOU ARE CHECKING A ROUTE');
});

module.exports = router;