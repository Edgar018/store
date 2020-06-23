const Stripe = require('stripe');
const stripe = new Stripe('sk_test_51GvMYiIcbD3CadJq2RAdShg81AQqk0kGcqcvW0deQp0hm2k1UTgC2Vh3hc6CHekoeMVL3meyxUv3Xefi5J4jQP9s00LhUaewxL');

const paymentCtrl = {}

paymentCtrl.handlePayment = async (req, res) => {
    const { id, amount } = req.body;
    console.log(id);

    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'lorem ipsum',
            payment_method: id,
            confirm: true
        });

        console.log(payment)

        return res.status(200).json({
            confirm: 'abc123'
        });

    } catch(error){
        return res.status(400).json({message: error.message});
    }
}

module.exports = paymentCtrl;



