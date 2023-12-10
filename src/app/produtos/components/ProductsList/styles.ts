import { styled, css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};
    h2 {
      font-size: ${theme.font.sizes.huge};
    }
  `}
`

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
  `}
`

export const Product = styled.div`
  span {
    font-size: 2rem;
  }
`
