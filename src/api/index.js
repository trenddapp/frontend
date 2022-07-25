import axios from 'axios'

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
})

const handleError = (error) => {
  return Promise.reject(error)
}

const handleRequest = (request) => {
  return request
}

const handleResponse = (response) => {
  return response
}

customAxios.interceptors.request.use(
  (request) => handleRequest(request),
  (error) => handleError(error),
)

customAxios.interceptors.response.use(
  (response) => handleResponse(response),
  (error) => handleError(error),
)

export default customAxios
