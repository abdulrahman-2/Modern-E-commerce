import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import useCartStore from "../store/Cartstore";
import toast from "react-hot-toast";

const stripePromise = loadStripe(
  "pk_test_51RhtgdRbyiIzOvYfJZoM0WMT3AMN21yn0WKxLmwlM092hbhzqpEf9VfM0QrnqmBKpl1Q4Wl2afYxh5z0zSG5gboC00vhiWL0x5"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, totalPrice, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setPaymentError(null);

    try {
      // Create a payment intent on your server
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/create-payment-intent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: Math.round(totalPrice() * 100), 
            currency: "usd",
            payment_method_types: ["card"],
          }),
        }
      );

      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json().catch(() => ({}));
        const errorMessage =
          errorData.error ||
          `Server error: ${response.status} ${response.statusText}`;
        setPaymentError(errorMessage);
        setIsProcessing(false);
        return;
      }

      const { clientSecret, error: backendError } = await response.json();

      if (backendError) {
        setPaymentError(backendError);
        setIsProcessing(false);
        return;
      }

      // Confirm the payment on the client
      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              name: "Customer",
            },
          },
        });

      if (stripeError) {
        setPaymentError(stripeError.message || "Payment failed");
      } else if (paymentIntent.status === "succeeded") {
        setPaymentSuccess(true);
        toast.success("Payment successful!");
        handleClearCart();
      }
    } catch (error) {
      console.log("Payment error:", error);
      if (
        error instanceof TypeError &&
        error.message.includes("Failed to fetch")
      ) {
        setPaymentError(
          "Unable to connect to payment server. Please make sure the server is running on port 4242."
        );
      } else {
        setPaymentError("Network error. Please try again later.");
      }
    }

    setIsProcessing(false);
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (paymentSuccess) {
    return (
      <div className="text-center py-8">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <h2 className="text-2xl font-bold mb-2">Payment Successful! 🎉</h2>
          <p className="mb-2">Thank you for your purchase.</p>
          <p>Your order has been processed successfully.</p>
        </div>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span className="text-sm">
                {item.title} (x{item.quantity})
              </span>
              <span className="text-sm font-medium">
                ${(item.price * (item.quantity || 0)).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="border-t mt-2 pt-2 font-bold flex justify-between">
            <span>Total:</span>
            <span>${totalPrice().toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Credit or Debit Card
        </label>
        <div className="border rounded-lg p-3 bg-white">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
      </div>

      {paymentError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {paymentError}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          `Pay $${totalPrice().toFixed(2)}`
        )}
      </button>
    </form>
  );
};

const StripePayment = () => {
  const { cart } = useCartStore();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="mb-4">
          Please add some items to your cart before proceeding to checkout.
        </p>
        <button
          onClick={() => (window.location.href = "/shop")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Complete Your Payment
      </h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default StripePayment;
