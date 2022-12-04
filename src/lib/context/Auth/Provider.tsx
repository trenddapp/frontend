'use client'

import { useConnector } from 'lib/hook'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { createSession, createUser, getSession, getUser } from 'lib/api/user'
import Context from './Context'

interface AccessToken {
  id: string
  address: string
}

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  const [userId, setUserId] = useState<string | undefined>(undefined)
  const { address, isConnected, signer } = useConnector()

  // connect obtains an access token and stores it in the local storage
  const connect = async () => {
    // return if user wallet is not connected
    if (address === undefined || !isConnected) {
      setUserId(undefined)
      return
    }
    // use the current access token if available in the local storage
    const accessToken = localStorage.getItem('access_token')
    if (accessToken !== null) {
      const jwt = jwt_decode<AccessToken>(accessToken)
      if (address === jwt.address) {
        setUserId(jwt.id)
        return
      }
    }
    // request access token and store it in the local storage
    let user
    try {
      user = await getUser(address)
    } catch (error: any) {
      if (error?.response?.data?.error?.code !== 404) {
        console.log('getUser:', error)
        setUserId(undefined)
        return
      }
      try {
        user = await createUser(address)
      } catch (error: any) {
        console.log('createUser:', error)
        setUserId(undefined)
        return
      }
    }
    try {
      let session = await getSession(user.id)
      if (signer === undefined) {
        return
      }
      const message = await signer.signMessage(session.nonce)
      session = await createSession(user.id, message)
      localStorage.setItem('access_token', session.token)
      const claims = jwt_decode<AccessToken>(session.token)
      setUserId(claims.id)
    } catch (error: any) {
      console.log('connect:', error)
      setUserId(undefined)
      return
    }
  }

  // disconnect removes the access token from the local storage
  const disconnect = async () => {
    setUserId(undefined)
    localStorage.removeItem('access_token')
  }

  useEffect(() => {
    connect()
  }, [address, isConnected, signer])

  return <Context.Provider value={{ connect, disconnect, userId }}>{children}</Context.Provider>
}
