"use client";

import { useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import "./CheckoutForm.css";
import useAuth from "@/hooks/useAuth";
import { Dialog } from "@headlessui/react";

const CheckOutForm = ({
  closeModal,
  cartProducts,
  totalPrice,
  currency,
  address,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState("");

  // get clientSecret from backend
  useEffect(() => {
    if (totalPrice > 0) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER}/create-payment-intent`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ totalPrice, currency }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [totalPrice, currency]);

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    // get a reference to a mounted care-element
    const card = elements.getElement(CardElement);
    if (card === null) return;

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({ type: "card", card });
    if (error) {
      console.log("error-54", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) setCardError(confirmError.message);

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      // save payment information to the server
      const productIds = cartProducts?.map((product) => product._id);
      const orderData = {
        productIds,
        totalPrice,
        quantity: cartProducts?.length,
        currency,
        orderStatus: "pending",
        transactionId,
        consumerInfo: {
          name: user?.displayName,
          email: user?.email,
          address: address,
        },
      };

      fetch(`${process.env.NEXT_PUBLIC_SERVER}/save-card-payment`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(orderData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.data.insertedId) {
            toast.success("payment completed successfully");
            localStorage.removeItem("product-cart");
            closeModal();
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handlePaymentSubmit} className="md:pl-10">
        <CardElement className="border py-3" />
        <Dialog.Panel className="mb-5 md:mr-20">
          <div className="flex items-center justify-between">
            <button
              className="rounded-md bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button
              type="submit"
              onClick={closeModal}
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
              disabled={!stripe || !clientSecret || processing}
            >
              Done Payment
            </button>
          </div>
        </Dialog.Panel>
      </form>
      {cardError && (
        <p className="bg-red-600 text-white p-3 text-center mt-5 mb-10 mx-auto rounded-lg">
          {cardError}
        </p>
      )}
      {transactionId && (
        <p className="bg-green-700 text-white p-3 text-center mt-5 mx-auto rounded-lg mb-10">
          Your transaction id: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckOutForm;
