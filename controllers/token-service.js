const axios = require('axios').default
require('dotenv').config()

const getAuthToken = () => {
  console.log(process.env.API_KEY)
}

module.exports = {
  getAuthToken
}
