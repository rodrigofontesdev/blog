import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
   50% {
    opacity: 0.5;
   }
`

export const Container = styled.div<{ $width: number; $height: number; $radii: number }>`
  width: 100%;
  max-width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border-radius: ${(props) => props.$radii}px;
  background-color: rgb(98 98 98 / 0.15);
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`
