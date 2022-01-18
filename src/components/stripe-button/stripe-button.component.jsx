import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price})=>{
    const priceForStripe = price*100;
    const publishablekey = 'pk_test_51KJBrLSFFbi15AoZpFVjrXYpA5i9hFyCe1T7DBfIOxpQKZKQzbTCDabHKjCn0UX4oJJmZyNZXshHha69pDPFIUjU006gllzQEa';

    const onToken = (token)=>{
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
        label="Pay Now"
        name='SparkleIsta'
        billingAddress
        shippingAddress
        description={`Your Total Price is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}

        />
    )

}

export default StripeButton;