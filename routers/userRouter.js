const  express = require('express');
const path = require('path');
const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"../view/Home.html" ))
})


router.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname,"../view/Admin.html" ))
})


module.exports = router;