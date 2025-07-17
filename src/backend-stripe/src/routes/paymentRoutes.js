import express from 'express';
import {
  createPaymentIntent,
  handleStripeWebhook,
  getPaymentHistory,
  getOrderDetails
} from '../controllers/paymentController.js';

const router = express.Router();

// Create a payment intent
router.post('/create-payment-intent', createPaymentIntent);

// Stripe webhook handler (needs raw body)
router.post('/webhook', express.raw({ type: 'application/json' }), handleStripeWebhook);

// Get payment history for a user
router.get('/history/:userId', getPaymentHistory);

// Get order details
router.get('/order/:orderId', getOrderDetails);

export default router;