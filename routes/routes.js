const { getListOfPhones, getSinglePhone } = require('./phones');

const appRouter = (app) => {
  app.get('/phones', (req, res) => getListOfPhones(req, res))
  app.get('/phone/:id', (req, res) => getSinglePhone(req, res))
  //...
}

module.exports = appRouter