import { ButtonIcon } from '@components/ButtonIcon'
import { EmptyList } from '@components/EmptyList'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { Player, PlayerCard } from '@components/PlayerCard'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Container, Form, HeaderList, TeamSize } from './styles'
import { Button } from '@components/Button'
import { ButtonTypeStyle } from '@components/Button/styles'
import { useRoute } from '@react-navigation/native'

type Team = {
  name: string
  players: Player[]
}

export function Players() {
  const [teams, setTeams] = useState<Team[]>([])
  const [selectedTeam, setSelectedTeam] = useState<Team>(teams?.[0] || null)

  function isTeamSelected(team: Team) {
    return team?.name === selectedTeam?.name
  }

  function removePlayer(player: Player) {
    const playerIndex = selectedTeam.players.findIndex(
      p => p.name === player.name
    )

    if (playerIndex !== -1) {
      selectedTeam.players.splice(playerIndex, 1)
      setTeams([...teams])
    }
  }

  const [newPlayerName, setNewPlayerName] = useState('')

  function addPlayer() {
    selectedTeam.players.push({
      name: newPlayerName,
    })

    setTeams([...teams])
    setNewPlayerName('')
  }

  const route = useRoute()
  const { group } = route.params as Players.RouteParams

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={text => setNewPlayerName(text)}
          onEndEditing={addPlayer}
        />
        <ButtonIcon style={{ flexGrow: 0.2 }} icon="add" onPress={addPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          horizontal
          data={teams}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item: team }) => (
            <Filter
              title={team.name}
              isActive={isTeamSelected(team)}
              onPress={() => setSelectedTeam(team)}
            />
          )}
        />

        <TeamSize>{selectedTeam?.players?.length}</TeamSize>
      </HeaderList>

      <FlatList
        data={selectedTeam?.players || []}
        ListEmptyComponent={() => (
          <EmptyList emptyMessage="Não há pessoas nesse time" />
        )}
        renderItem={({ item: player }) => (
          <PlayerCard player={player} onRemove={() => removePlayer(player)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {
            paddingBottom: 100,
          },
          !selectedTeam?.players?.length ? { flexGrow: 1 } : {},
        ]}
      />

      <Button title="Remover turma" type={ButtonTypeStyle.SECONDARY} />
    </Container>
  )
}

export namespace Players {
  export type RouteParams = {
    group: string
  }
}
