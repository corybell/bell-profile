import { fontSize, color, fontWeight } from 'services/theme'

export const linkAnimation = `
  transition: all .2s ease-out;
  will-change: transform, color;
  &:after {
    z-index: 1;
    position: absolute;
    bottom: -1px;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    background-color: ${color.primary};
    transform: scale(0, 1);
    transform-origin: 100% 50%;
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), 
    -webkit-transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover:after,
  &.active:after {
    background-color: ${color.primary};
    transform: scale(1);
    transform-origin: 0 50%;
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1), background-color 0.2s ease-out, 
    -webkit-transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  }
`

export const flexFullWidth = `
  width: 100%;
  display: flex;
`

export const flexColumnCenter = `
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const primaryButton = `
  width: 100%;
  padding: 1rem;
  
  ${flexColumnCenter}
  text-align: center;
  
  font-size: ${fontSize[1]};
  font-weight: ${fontWeight.medium};
  text-transform: uppercase;

  border: 5px solid ${color.primary};
  color: #000;
  background-color: #fff;

  transition: background-color 300ms ease-in-out, border-color 400ms ease-in-out;
  &:hover {
    color: #fff;
    background-color: ${color.primary};
    cursor: pointer;
  }
`

export const buttonWidth = `
  width: 224px;
`
