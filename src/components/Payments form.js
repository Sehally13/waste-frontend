import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Container, Typography, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    try {
      const { id } = paymentMethod;
      const response = await axios.post('http://localhost:5000/api/pay', { id, amount: 5000 });
      if (response.data.success) {
        setMessage('Payment successful!');
      } else {
        setMessage('Payment failed. Please try again.');
      }
    } catch (error) {
      setMessage('Payment error. Please try again.');
    }

    setLoading(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Payment</Typography>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <Button type="submit" variant="contained" color="primary" disabled={!stripe || loading}>
          {loading ? <CircularProgress size={24} /> : 'Pay'}
        </Button>
      </form>
      {message && <Typography variant="body1">{message}</Typography>}
    </Container>
  );
}

export default PaymentForm;
