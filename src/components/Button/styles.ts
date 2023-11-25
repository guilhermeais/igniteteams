import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export enum ButtonTypeStyle {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type Props = {
  type: ButtonTypeStyle
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === ButtonTypeStyle.PRIMARY
      ? theme.COLORS.GREEN_700
      : theme.COLORS.RED_DARK};

  border-radius: 6px;
  align-items: center;
  justify-content: center;
`

export const ButtonTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
