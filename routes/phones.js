const phonesData = require('../assets/phone-data.json')

function getListOfPhones(req, res) {
  res.end(JSON.stringify(phonesData))
}

function getSinglePhone(req, res) {
  const phone = phonesData.data.filter( phone => phone.id === req.params.id)
  res.end(JSON.stringify(phone))
}

module.exports = { getListOfPhones, getSinglePhone }