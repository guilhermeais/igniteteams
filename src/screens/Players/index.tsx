import { Button } from '@components/Button'
import { ButtonTypeStyle } from '@components/Button/styles'
import { ButtonIcon } from '@components/ButtonIcon'
import { EmptyList } from '@components/EmptyList'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { PlayerCard } from '@components/PlayerCard'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { Player } from 'src/models/player'
import { Team } from 'src/models/team'
import { BottomList, Container, Form, HeaderList, TeamSize } from './styles'
import { getGroupByName } from '@storage/group/get-group-by-name'
import { Group } from 'src/models/Group'
import { addTeamToGroup } from '@storage/group/add-team-to-group'
import { removeTeamFromGroup } from '@storage/group/remove-team-from-group'
import { AppError } from '@utils/app.error'

export function Players() {
  const [group, setGroup] = useState<Group>()
  const [teams, setTeams] = useState<Team[]>([
    {
      name: 'Time A',
      players: [],
    },
    {
      name: 'Time B',
      players: [],
    },
  ])

  const [selectedTeam, setSelectedTeam] = useState<Team>()

  function getNextTeamName() {
    const lastTeam = teams?.at(-1)

    if (!lastTeam) {
      return 'Time A'
    }

    const lastTeamName = lastTeam.name
    const lastTeamNameLetter = lastTeamName.replace('Time ', '')
    const nextTeamNameLetter = String.fromCharCode(
      lastTeamNameLetter.charCodeAt(0) + 1
    )

    return `Time ${nextTeamNameLetter}`
  }

  function isTeamSelected(team: Team) {
    return team?.name === selectedTeam?.name
  }

  function removePlayer(player: Player) {
    if (!selectedTeam) {
      return
    }

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
    if (!selectedTeam) {
      if (!teams?.length) {
        Alert.alert('Ops!', 'Você precisa criar um time primeiro.')
      } else {
        Alert.alert(
          'Ops!',
          'Você precisa selecionar um time para adicionar uma pessoa.'
        )
      }

      return
    }
    selectedTeam.players.push({
      name: newPlayerName,
    })

    setTeams([...teams])
    setNewPlayerName('')
  }

  async function handleAddTeam() {
    try {
      const newTeam: Team = {
        name: getNextTeamName(),
        players: [],
      }

      await addTeamToGroup(groupName, newTeam)
      setTeams([...teams, newTeam])
    } catch (error) {
      console.log(error)
    }
  }

  async function handleRemoveTeam(team: Team) {
    try {
      await removeTeamFromGroup(groupName, team)

      await fetchGroup()
    } catch (error) {
      if (AppError.isAppError(error)) {
        Alert.alert('Ops!', error.message)
      }

      console.error(
        'An error occurred while trying to remove the team from the group.',
        error
      )
    }
  }

  const route = useRoute()
  const { group: groupName } = route.params as Players.RouteParams

  async function fetchGroup() {
    try {
      const storedGroup = await getGroupByName(groupName)
      setGroup(() => {
        const { teams } = storedGroup
        setTeams(teams)
        setSelectedTeam(teams[0])

        return storedGroup
      })
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroup()
    }, [])
  )

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={groupName}
        subtitle="adicione a galera e separe os times"
      />

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
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          data={teams}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item: team }) => (
            <Filter
              title={team.name}
              isActive={isTeamSelected(team)}
              onPress={() => setSelectedTeam(team)}
              onRemove={() => handleRemoveTeam(team)}
            />
          )}
        />
      </HeaderList>
      <BottomList>
        <ButtonIcon
          style={{
            maxWidth: 38,
            maxHeight: 38,
          }}
          onPress={handleAddTeam}
          icon={'add'}
        />

        <TeamSize>{selectedTeam?.players?.length}</TeamSize>
      </BottomList>

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
