import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export enum ButtonIconTypeStyle {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type Props = {
  type?: ButtonIconTypeStyle
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  height: 56px;

  align-items: center;
  justify-content: center;

  flex-direction: row;
`

export const Icon = styled(MaterialIcons).attrs<Props>(
  ({ theme, type = ButtonIconTypeStyle.PRIMARY }) => ({
    size: 24,
    color:
      type === ButtonIconTypeStyle.PRIMARY
        ? theme.COLORS.GREEN_700
        : theme.COLORS.RED,
  })
)``
