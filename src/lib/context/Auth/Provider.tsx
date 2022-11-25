'use client'

import { useConnector } from 'lib/hook'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { createSession, createUser, getSession, getUser } from 'lib/api/user'
import Context from './Context'

interface AccessToken {
  id: string
  address: string
  exp: number
}

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  const [userId, setUserId] = useState<string | undefined>(undefined)
  const { address, isConnected, signer } = useConnector()

  // disconnect removes access-token and refreshes the page.
  const disconnect = async () => {
    setUserId(undefined)
    localStorage.removeItem('access_token')
  }

  // Try to obtain access token if user wallet is connected and there isn't a valid access token.
  useEffect(() => {
    // Return if user wallet is not connected.
    if (address === undefined || !isConnected) {
      setUserId(undefined)
      return
    }
    // Return and set access token state on a valid access token in local storage.
    const accessToken = localStorage.getItem('access_token')
    if (accessToken !== '' && accessToken !== null) {
      const jwt = jwt_decode<AccessToken>(accessToken)
      if (address === jwt.address) {
        setUserId(jwt.id)
        return
      }
    }
    // Create access token and store it in local storage and set access token state.
    const connect = async () => {
      console.log('Trying to connect')
      let user
      try {
        user = await getUser(address)
      } catch (error: any) {
        if (error?.response?.data?.error?.code !== 404) {
          console.log('connect:', error)
          setUserId(undefined)
          return
        }
        try {
          user = await createUser(address)
        } catch (error: any) {
          console.log('connect:', error)
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
    connect()
  }, [address, isConnected, signer])

  return <Context.Provider value={{ disconnect, userId }}>{children}</Context.Provider>
}
