import { Header } from '@components/Header'
import { Container } from './styles'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

type Group = {
  title: string
}

export function Groups() {
  const [groups, setGroups] = useState<Group[]>([])

  useEffect(
    () =>
      setGroups([
        {
          title: 'Turma A',
        },
        {
          title: 'Turma B',
        },
      ]),
    []
  )

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item, i) => `${item.title}-${i}`}
        renderItem={({ item }) => <GroupCard title={item.title} />}
      />
    </Container>
  )
}
