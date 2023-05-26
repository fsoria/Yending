const { Router } = require('express');
const router = Router();
const { postMessage  } = require('../controllers/messagecontroller');

router.post('/message', postMessage);

module.exports = router;