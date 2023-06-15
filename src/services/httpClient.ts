import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
  withCredentials: true,
  headers: {
    ContentType: 'application/json'
  }
})

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    Promise.reject(err)
  }
)

export default httpClient
