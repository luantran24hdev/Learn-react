import axios from 'axios'
axios.defaults.baseURL = 'https://pgt-api.dev.poker/v1/api'

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token')
    let authToken = `Bearer ${token}`
    if (
      config.url.includes('/sign-in') // do not include the token when login
    ) {
      authToken = undefined
    }
    if (authToken) {
      config.headers['Authorization'] = `Bearer ${token}`
      // config.headers['Access-Control-Allow-Origin'] = "*"
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)
axios.interceptors.response.use(
  response => {
    return response
  },
  function(error) {
    if ((error.response && error.response.status === 401) || error.response.status === 452) {
      localStorage.removeItem('access_token')
    }
    return Promise.reject(error)
  }
)

export default axios
