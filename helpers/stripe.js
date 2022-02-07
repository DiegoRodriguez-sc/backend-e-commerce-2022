const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SK);

/**
 * Generar intencion de PAGO
 */

const generatePaymentIntent = async ({ amount, user, payment_method }) => {
  const resPaymentIntent = await stripe.paymentIntents.create({
    amount: parseFloat(amount) * 100,
    currency: "USD",
    payment_method_types: ["card"],
    payment_method,
    description: `Pago de -> ${user}`,
  });

  return resPaymentIntent;
};


/**
 * Consultar detalle de ordne
 */

const getPaymentDetail = async (id) => {
  const detailOrder = await stripe.paymentIntents.retrieve(id);
  return detailOrder;
};

module.exports = {
  generatePaymentIntent,
  getPaymentDetail,
};