import logoImage from '@assets/logo.png'
import { BackButton, BackIcon, Container, Logo } from './style'
import { useNavigation } from '@react-navigation/native'

export type HeaderProps = {
  showBackButton?: boolean
}
export function Header({ showBackButton }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('Groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImage} />
    </Container>
  )
}
