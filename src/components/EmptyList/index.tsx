import { Container, EmptyMessage } from './styles'

export type EmptyListProps = {
  emptyMessage: string
}
export function EmptyList({ emptyMessage }: EmptyListProps) {
  return (
    <Container>
      <EmptyMessage>{emptyMessage}</EmptyMessage>
    </Container>
  )
}
