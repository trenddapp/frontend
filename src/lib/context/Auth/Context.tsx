'use client'

import { createContext } from 'react'

export interface Auth {
  disconnect: () => void
  userId?: string
}

const Context = createContext<Auth>({ disconnect: () => {} })

export default Context
