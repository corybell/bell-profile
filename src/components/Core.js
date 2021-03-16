import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { typography } from '../services/theme'

// export const Container = styled.div`
//   width: 100%;
//   height: 100%;
// `

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2rem;
`

// export const Container = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: 1140px;
//   margin: 0 auto;
//   padding: 0 20px;
//   box-sizing: border-box;
// `

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

export const TextContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

//font-family: ${({ font }) => font === 'secondary' ? 'BarlowSemiCondensed-Medium' : 'FVAlmelo' };
export const Typography = styled.div`
  width: 100%;
  font-size: ${({ variant }) => typography[variant].size};
  line-height: ${({ variant }) => typography[variant].line};
  font-family: Avenir Next;
`

export const Spacer = styled.div`
  width: 100%;
  height: ${({ size }) => size}rem;
`

export const Anchor = styled.a`
  outline: none;
  text-decoration: none;
`

export const Link = styled(GatsbyLink)`
  outline: none;
  text-decoration: none;
`
