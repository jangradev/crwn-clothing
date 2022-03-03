import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey =
    'pk_test_51KYqqdSEyOURbVYL6tIoPDhUvBeKMqdsLA16pLmBBXM6CcFP3uGfOWYKsSKaM8WvdSGQvWJwFiGiv73PhZ5wrW5E00FMiqkcUT';
  const onToken = (token) => {
    console.log('token');
    alert('Payment Sucessfull');
  };
  return (
    <StripeCheckout
      name='CRWN Clothing Ltd.'
      description={`Your total is $ ${price} /-`}
      image='https://stripe.com/img/documentation/checkout/marketplace.png'
      label='Pay Now'
      amount={priceForStripe}
      stripeKey={publishKey}
      email='info@crwnclothing.com'
      billingAddress
      token={onToken}
    ></StripeCheckout>
  );
};
export default StripeCheckoutButton;
