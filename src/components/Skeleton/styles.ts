import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
   50% {
    opacity: 0.5;
   }
`

export const Container = styled.div<{ $width: number; $height: number; $radii: number }>`
  width: min(${(props) => props.$width / 16}rem, 100%);
  height: ${(props) => props.$height / 16}rem;
  border-radius: ${(props) => props.$radii}px;
  background-color: rgb(98 98 98 / 0.15);
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`
