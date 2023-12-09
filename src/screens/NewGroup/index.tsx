import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Container, Content, Icon } from './styles'
import { createGroup } from '@storage/group/create-group'
import { Group } from 'src/models/group'
import { AppError } from '@utils/app.error'
import { Alert } from 'react-native'

export function NewGroup() {
  const [newGroupName, setNewGroupName] = useState('')

  const navigation = useNavigation()

  async function handleCreateGroup() {
    try {
      const newGroup: Group = {
        name: newGroupName,
        teams: [
          {
            name: 'Time A',
            players: [],
          },
          {
            name: 'Time B',
            players: [],
          },
        ],
      }

      await createGroup(newGroup)
      navigation.navigate('Players', { group: newGroupName })
    } catch (error) {
      console.error(error)

      if (AppError.isAppError(error)) {
        Alert.alert(`Novo Grupo`, error.message)
        return
      }

      Alert.alert(`Novo Grupo`, `Não foi possível criar um novo grupo.`)
    }
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
          onChangeText={setNewGroupName}
        />

        <Button title="Criar" onPress={handleCreateGroup} />
      </Content>
    </Container>
  )
}

export namespace NewGroup {
  export type RouteParams = undefined
}
