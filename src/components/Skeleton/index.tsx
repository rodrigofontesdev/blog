import { Container } from './styles'

interface SkeletonProps {
  width: number
  height: number
  radii?: number
}

export function Skeleton({ width, height, radii }: SkeletonProps) {
  return <Container $width={width} $height={height} $radii={radii ?? 4}></Container>
}
