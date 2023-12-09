'use strict'
const axios = require("axios");

module.exports = async function (fastify, opts) {
  fastify.get('/products', async function (request, reply) {
    const response = await axios.get("https:hub.dummyapis.com/products");
    const { data } = response ;
    reply.code(200).send(data);
    
  })
}
