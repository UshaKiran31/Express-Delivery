import  { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CreateShipment from "../CreateShipment";
import "./Payment.css"; // Import CSS

const stripePromise = loadStripe("your-stripe-public-key");

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name,
      },
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("Payment Successful:", paymentMethod);
      setSuccess(true);
      setError(null);
    }
  };

  return (
    <div className="payment-container">
      <CreateShipment />
      <div className="form-container">
        <h2 className="title">Payment Page</h2>
        {success ? (
          <div className="success-message">Payment Successful!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cardHolder" className="label">
                Card Holder Name
              </label>
              <input
                type="text"
                id="cardHolder"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="input"
              />
            </div>

            <div className="form-group">
              <label className="label">Card Details</label>
              <div className="card-element-container">
                <CardElement className="card-element" />
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button
              type="submit"
              className="submit-button"
              disabled={!stripe || success}
            >
              Submit Payment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Payment = ({ onSubmitSuccess }) => (
  <Elements stripe={stripePromise}>
    <PaymentForm onSubmitSuccess={onSubmitSuccess} />
  </Elements>
);

export default Payment;
