const { Router } = require('express');
const postMessage = require('./messageRoutes');


const router = Router();

router.post('/message', postMessage);


module.exports = router;