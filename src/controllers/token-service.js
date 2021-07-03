const axios = require('axios').default
// this does not work for frontend: ????
// require('dotenv').config()

let bearer

const getAuthToken = () => {
  try {
    if (bearer) return bearer
    const URL = 'https://accounts.spotify.com/api/token'

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      auth: {
        username: process.env.REACT_APP_API_KEY,
        password: process.env.REACT_APP_API_SECRET_KEY
      }
    }

    return axios
      .post(URL, 'grant_type=client_credentials', config)
      .then(response => {
        axios.defaults.headers.common = {
          Authorization: `Bearer ${response.data.access_token}`
        }
        // console.log(response.data.access_token) // works
        return response.data.access_token
      })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAuthToken
}
