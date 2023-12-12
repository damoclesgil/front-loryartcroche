'use client'

import { styled, css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
