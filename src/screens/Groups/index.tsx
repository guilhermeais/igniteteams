import { Button } from '@components/Button'
import { EmptyList } from '@components/EmptyList'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Group } from '@screens/Players'
import { listGroups } from '@storage/group/list-groups'
import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([])
  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('NewGroup')
  }

  async function fetchGroups() {
    try {
      console.log('🚀 fetching stored groups...')
      const storedGroups = await listGroups()

      console.log('🚀 stored groups fetched!', storedGroups)

      setGroups(storedGroups)
    } catch (error) {
      console.error(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, [])
  )

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item, i) => `${item.name}-${i}`}
        contentContainerStyle={!groups.length && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList emptyMessage="Que tal cadastrar a primeira turma?" />
        )}
        renderItem={({ item }) => <GroupCard title={item.name} />}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  )
}

export namespace Groups {
  export type RouteParams = undefined
}
