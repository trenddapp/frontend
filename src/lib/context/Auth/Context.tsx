'use client'

import { createContext } from 'react'

export interface Auth {
  connect: () => void
  disconnect: () => void
  userId?: string
}

const Context = createContext<Auth>({ connect: () => {}, disconnect: () => {} })

export default Context
