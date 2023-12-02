import { TouchableOpacityProps } from 'react-native'
import { Container, FilterStyleProps, Title } from './styles'

export type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string
  }

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  )
}
