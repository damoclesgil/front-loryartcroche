import React from 'react'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'
import { ThemeProvider } from 'styled-components'
// import { addDecorator } from '@storybook/react'
// import { withNextRouter } from 'storybook-addon-next-router'

// addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  )
]
