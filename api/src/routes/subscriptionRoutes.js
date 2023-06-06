const { Router } = require('express');
const router = Router();
const SubscriptionController = require('../controllers/subscriptionController');

router.post('/subscribe', SubscriptionController.create);

module.exports = router;
