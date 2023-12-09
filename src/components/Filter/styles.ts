import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { IconProps, X } from 'phosphor-react-native'

export type FilterStyleProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  border-radius:4px;

  margin-right: 12px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;
`

export const RemoveFilterBadge = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 15px;
  height: 15px;
  border-radius: 8px;

  position: absolute;
  top: 0px;
  right: -8px;

  align-items: center;
  justify-content: center;
`

export const RemoveFilterBadgeIcon = styled(X).attrs(
  ({ theme }) =>
    ({
      size: 12,
      color: theme.COLORS.WHITE,
    } as IconProps)
)``

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}

  text-transform: uppercase;
`
