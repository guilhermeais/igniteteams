import { TouchableOpacityProps } from 'react-native'
import * as styles from './styles'

export type ButtonProps = TouchableOpacityProps & {
  title: string
  type?: styles.ButtonTypeStyle
}

export function Button({
  title,
  type = styles.ButtonTypeStyle.PRIMARY,
  ...rest
}: ButtonProps) {
  return (
    <styles.Container type={type} {...rest}>
      <styles.ButtonTitle>{title}</styles.ButtonTitle>
    </styles.Container>
  )
}
