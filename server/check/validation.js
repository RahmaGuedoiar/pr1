const  Joi= require('Joi')

const OrderSchema = Joi.object({
  address: Joi.string().required(),
  items: Joi.array().items(Joi.string()).required(),
});

module.exports= OrderSchema;