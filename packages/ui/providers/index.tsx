'use client'
import { ReactNode } from 'react'

import { ThemeProvider } from '@emotion/react'
import { theme } from '../theme/index'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
