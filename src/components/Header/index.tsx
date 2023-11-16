import logoImage from '@assets/logo.png'
import { BackButton, BackIcon, Container, Logo } from './style'

export type HeaderProps = {
  showBackButton?: boolean
  onBack?: () => void
}
export function Header({ showBackButton, onBack = () => void 0 }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={onBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImage} />
    </Container>
  )
}
