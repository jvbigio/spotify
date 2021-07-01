const axios = require('axios').default
require('dotenv').config()

let bearer

const getAuthToken = () => {
  // console.log('testing!!') // works
  // console.log(process.env.API_KEY)
  try {
    if (bearer) return bearer
    const URL = 'https://accounts.spotify.com/api/token'

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      auth: {
        username: process.env.API_KEY,
        password: process.env.API_SECRET_KEY
      }
    }

    return axios
      .post(URL, 'grant_type=client_credentials', config)
      .then(response => {
        axios.defaults.headers.common = {
          Authorization: `Bearer ${response.data.access_token}`
        }
        return response.data.access_token
      })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAuthToken
}
