'use client'

import { AuthProvider } from 'pkg/context/Auth'

interface DappsLayoutProps {
  children: React.ReactNode
}

export default function DappsLayout({ children }: DappsLayoutProps) {
  return <AuthProvider>{children}</AuthProvider>
}
