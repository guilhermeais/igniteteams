import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const [newGroupName, setNewGroupName] = useState('')

  const navigation = useNavigation()

  function handleCreateGroup() {
    navigation.navigate('Players')
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova da Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />

        <Input
          placeholder="Nome da turma"
          style={{ marginBottom: 20 }}
          value={newGroupName}
          onChangeText={t => setNewGroupName(t)}
        />

        <Button title="Criar" onPress={handleCreateGroup} />
      </Content>
    </Container>
  )
}
