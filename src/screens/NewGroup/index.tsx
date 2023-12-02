import { Highlight } from '@components/Highlight'
import { Container, Content, Icon } from './styles'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova da Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />

        <Input placeholder="Nome da turma" style={{ marginBottom: 20 }} />

        <Button title="Criar" />
      </Content>
    </Container>
  )
}
