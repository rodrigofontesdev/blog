import { router } from '@routes/Root'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@styles/global'
import { defaultTheme } from '@styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
