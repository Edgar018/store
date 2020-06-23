import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './checkoutForm';

const stripePromise = loadStripe('pk_test_51GvMYiIcbD3CadJqIXog2BbsNZlpqaVSq1hTNpjuYMY1PsPHJ0fbT3gUOiWdUOo9UZIG1eYJi9O4DM5xKpKw6VAT009zRIsD44')


const FinalizedPayment = ({ price }) => {

    const [status, setStatus] = useState('');

    if(status === 'success'){
        return <div>Congrats</div>
    }

    return (
        <Elements stripe={stripePromise}> 
         <CheckoutForm price={price} success={() => {
             setStatus('success');
         }}/>

        </Elements>
    );
}

export default FinalizedPayment 