import axios from 'axios'

const API_BASE = process.env.NEXT_PUBLIC_APP_API_BASE

const Instance = axios.create({
  baseURL: API_BASE,
})

function apiCaller() {
  Instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (!error.response) {
        // user has no internet connection
      }
      switch (error.response.status) {
        case 422:
          // do smth
          break

        case 500:
          // redirect to 500.js page
          break
        default:
          break
      }

      return Promise.reject(error)
    },
  )

  return Instance
}

export default apiCaller
