import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  FilterStyleProps,
  RemoveFilterBadge,
  RemoveFilterBadgeIcon,
  Title,
} from './styles'

export type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string
    onRemove?: () => void
  }

export function Filter({
  title,
  onRemove,
  isActive = false,
  ...rest
}: FilterProps) {
  return (
    <Container {...rest} isActive={isActive}>
      <RemoveFilterBadge onPress={() => onRemove && onRemove()}>
        <RemoveFilterBadgeIcon />
      </RemoveFilterBadge>
      <Title>{title}</Title>
    </Container>
  )
}
