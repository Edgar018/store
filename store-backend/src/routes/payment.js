const { Router } = require('express');
const {handlePayment} = require('../controllers/payments.controllers'
)

const router = Router();

router.route('/')
    .post(handlePayment);

module.exports = router;