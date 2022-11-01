import jwt_decode from 'jwt-decode'

interface AccessToken {
  user_id: string
  address: string
  exp: number
}

// decodeAccessToken decodes, and returns the given access-token claims.
export function decodeAccessToken(token: string): AccessToken {
  return jwt_decode<AccessToken>(token)
}

// getAccessToken returns the stored access-token in local storage.
// If the token is not valid, an empty string is returned.
export function getAccessToken(): string {
  const token = localStorage.getItem('access_token')
  if (token === '' || token === null) {
    return ''
  }
  return token
}
