import { ethers } from 'ethers'
import { createSession, getSession, createUser, getUser } from 'pkg/api/user'
import { getAccessToken } from 'pkg/util/auth'

export async function connect(address: string, signer: ethers.Signer) {
  if (getAccessToken() !== '') {
    return
  }
  let user = undefined
  try {
    user = await getUser(address)
  } catch (error: any) {
    if (error?.response?.data?.error?.code !== 404) {
      console.log('connect:', error)
      return
    }
    try {
      user = await createUser(address)
    } catch (error) {
      console.log('connect:', error)
      return
    }
  }
  try {
    let session = await getSession(user.id)
    const message = await signer.signMessage(session.nonce)
    session = await createSession(user.id, message)
    localStorage.setItem('access_token', session.token)
  } catch (error) {
    console.log('connect:', error)
  }
}
