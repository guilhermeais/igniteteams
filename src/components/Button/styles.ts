import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

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
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
