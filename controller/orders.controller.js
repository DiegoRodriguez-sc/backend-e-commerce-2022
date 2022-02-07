const { generatePaymentIntent } = require("../helpers/stripe");
const Order = require("../models/order");

const postOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    const order = await Order.create({
      user: req.user._id,
      amount,
    });
    res.status(201).send({ data: order });
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send({ error: "Algo ocurrio" });
  }
};


const getOrder = async (req, res) => {
 const { id } = req.params;
 const order = await Order.findById(id);
 res.status(200).send({ data: order });
};



//TODO: preparar el pago
const updateOrder = async (req, res) => {
 try {
   const { id } = req.params;
   const { token } = req.body;

   const order = await Order.findById(id);

   const resPaymentIntent = await generatePaymentIntent({
     amount: order.amount,
     user: order.user,
     payment_method: token,
   });

   console.log(resPaymentIntent);
   await Order.findByIdAndUpdate(id, {
     stripeId: resPaymentIntent.id,
   });

   res.status(201).send({ data: resPaymentIntent });
 } catch (e) {
   console.log(e.message);
   res.status(500);
   res.send({ error: "Algo ocurrio" });
 }
};



module.exports = {
  postOrder,
  getOrder,
  updateOrder
};
