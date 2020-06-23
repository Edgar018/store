import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = ({ success, price }) => {

    const stripe = useStripe();
    const elements = useElements();
    console.log(price);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        if(!error){
            const { id } = paymentMethod;

            try {
                const URL = 
                'http://localhost:4000/api/payment';

                const {data} = await axios.post(URL, { 
                    id,
                    amount: price + '00'
                });
                console.log(data);
                success();
            } catch (error){
                console.log(error);
            }
        }
    }

    return (
        <form 
         className="mt-5"
         onSubmit={handleSubmit} 
         style={{width: '300px', margin: '0 auto'}}>
            <CardElement/>
            <button className="mt-2 btn btn-primary btn-block"
             type="submit"
             disabled={!stripe}>
                Pay
            </button>
        </form>
    )
}

export default CheckoutForm;