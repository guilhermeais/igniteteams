import { EmptyList } from '@components/EmptyList'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Container } from './styles'

type Group = {
  title: string
}

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([])

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
    </Container>
  )
}
