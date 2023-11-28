import CheckOutForm from "@/components/Home/Shipping/CheckoutForm/CheckoutForm";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);

const StripeModal = ({
  isOpen,
  openModal,
  closeModal,
  cartProducts,
  totalPrice,
  currency,
  address,
}) => {
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white py-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 md:pl-10"
                  >
                    Your Payable Amount: ${}
                  </Dialog.Title>

                  <hr className="bg-black border-dotted my-3 md:mx-10" />

                  <div className="mt-2 md:mx-10 mb-4">
                    <p className="text-red-500">
                      If you don&apos;t have any card? You can use this demo
                      card.
                    </p>
                    <p className="font-medium">Card Number: 4242424242424242</p>
                    <p className="font-medium">MM / YY: 12 / 26</p>
                    <p className="font-medium">CVC: 123</p>
                    <p className="font-medium">ZIP: 45612</p>
                  </div>

                  <Elements stripe={stripePromise}>
                    <CheckOutForm
                      closeModal={closeModal}
                      cartProducts={cartProducts}
                      totalPrice={totalPrice}
                      currency={currency}
                      address={address}
                    />
                  </Elements>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default StripeModal;
