import { Link } from 'gatsby'
import styled from 'styled-components'
import { maxWidth, spacing } from '../services/theme'

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${maxWidth.container};
  padding: ${spacing[8]};
`

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
`

export const CenterText = styled.div`
  text-align: center;
`

export const Center = styled.div`
  margin: 0 auto;
`

export const Spacer = styled.div`
  width: 100%;
  height: ${({ size }) => size}rem;
`

export const GatsbyLink = styled(Link)`
  outline: none;
  text-decoration: none;
`
