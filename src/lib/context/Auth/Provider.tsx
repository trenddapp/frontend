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
  const [userId, setUserId] = useState<string | null>(null)
  const { address: userWalletAddress, isConnected: isUserWalletConnected, signer } = useConnector()

  // disconnect removes access-token and refreshes the page.
  const disconnect = async () => {
    setUserId(null)
    localStorage.removeItem('access_token')
  }

  // Try to obtain access token if user wallet is connected and there isn't a valid access token.
  useEffect(() => {
    // Return if user wallet is not connected.
    if (userWalletAddress === undefined || !isUserWalletConnected) {
      setUserId(null)
      return
    }
    // Return and set access token state on a valid access token in local storage.
    const accessTokenStr = localStorage.getItem('access_token')
    if (accessTokenStr !== '' && accessTokenStr !== null) {
      const accessToken = jwt_decode<AccessToken>(accessTokenStr)
      if (userWalletAddress === accessToken.address) {
        setUserId(accessToken.id)
        return
      }
    }
    // Create access token and store it in local storage and set access token state.
    const connect = async () => {
      let user
      try {
        user = await getUser(userWalletAddress)
      } catch (error: any) {
        if (error?.response?.data?.error?.code !== 404) {
          setUserId(null)
          console.log('connect:', error)
          return
        }
        try {
          user = await createUser(userWalletAddress)
        } catch (error) {
          setUserId(null)
          console.log('connect:', error)
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
      } catch (error) {
        setUserId(null)
        console.log('connect:', error)
        return
      }
    }
    connect()
  }, [userWalletAddress, isUserWalletConnected])

  return <Context.Provider value={{ disconnect, userId }}>{children}</Context.Provider>
}
