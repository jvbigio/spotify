const axios = require('axios').default

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
        username: process.env.REACT_APP_CLIENT_ID,
        password: process.env.REACT_APP_CLIENT_SECRET
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
