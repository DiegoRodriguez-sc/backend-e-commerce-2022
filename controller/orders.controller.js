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

module.exports = {
  postOrder,
};
