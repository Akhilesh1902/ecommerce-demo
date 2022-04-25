import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  console.log(process.env.STRIPE_SECRET_KEY);
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;
