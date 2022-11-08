'use client'

import { createContext } from 'react'

export interface Auth {
  disconnect: () => void
  userId: string | null
}

const Context = createContext<Auth>({ disconnect: () => {}, userId: null })

export default Context
