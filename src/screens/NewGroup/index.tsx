import { Highlight } from '@components/Highlight'
import { Container, Content, Icon } from './styles'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useState } from 'react'

export function NewGroup() {
  const [newGroupName, setNewGroupName] = useState('')

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

        <Button title="Criar" />
      </Content>
    </Container>
  )
}
