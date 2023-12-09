import { ButtonIcon } from '@components/ButtonIcon'
import { Container, PlayerIcon, Name } from './styles'
import { ButtonIconTypeStyle } from '@components/ButtonIcon/styles'
import { Player } from "src/models/player"

export type PlayerCardProps = {
  player: Player
  onRemove?: () => void
}

export function PlayerCard({ player, onRemove = () => {} }: PlayerCardProps) {
  return (
    <Container>
      <PlayerIcon />

      <Name>{player.name}</Name>

      <ButtonIcon
        icon="close"
        type={ButtonIconTypeStyle.SECONDARY}
        onPress={onRemove}
      />
    </Container>
  )
}
