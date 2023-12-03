import { EmptyList } from '@components/EmptyList'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Container } from './styles'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'

type Group = {
  title: string
}

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([])
  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('NewGroup')
  }

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item, i) => `${item.title}-${i}`}
        contentContainerStyle={!groups.length && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList emptyMessage="Que tal cadastrar a primeira turma?" />
        )}
        renderItem={({ item }) => <GroupCard title={item.title} />}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  )
}
