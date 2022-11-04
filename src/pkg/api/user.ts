import customAxios from 'pkg/api'

const SERVICE_BASE = '/user'

interface Session {
  nonce: string
  token: string
}

interface User {
  id: string
  address: string
}

export async function getSession(userId: string) {
  const { data } = await customAxios.request<{ session: Session }>({
    method: 'get',
    url: `${SERVICE_BASE}/users/${userId}/sessions`,
  })
  return data.session
}

export async function createSession(userId: string, signedMessage: string) {
  const { data } = await customAxios.request<{ session: Session }>({
    data: { signed_message: signedMessage },
    method: 'post',
    url: `${SERVICE_BASE}/users/${userId}/sessions`,
  })
  return data.session
}

export async function getUser(address: string) {
  const { data } = await customAxios.request<{ user: User }>({
    method: 'get',
    url: `${SERVICE_BASE}/users/address=${address}`,
  })
  return data.user
}

export async function createUser(address: string) {
  const { data } = await customAxios.request<{ user: User }>({
    data: { address: address },
    method: 'post',
    url: `${SERVICE_BASE}/users`,
  })
  return data.user
}
