import { styled, css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};
    h2 {
      font-size: ${theme.font.sizes.huge};
    }
  `}
`
export const Product = styled.div`
  span {
    font-size: 2rem;
  }
`
