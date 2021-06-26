const axios = require('axios').default
require('dotenv').config()

const getAuthToken = () => {
  // console.log('testing!!') // works
  console.log(process.env.API_KEY)
}

module.exports = {
  getAuthToken
}
