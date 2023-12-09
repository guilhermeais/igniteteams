import { getGroupByName } from '@storage/group/get-group-by-name'
import { updateGroup } from '@storage/group/update-group'
import { GroupNotFoundError } from '@utils/errors/group-not-found.error'
import { InvalidPlayerError } from '@utils/errors/invalid-player.error'
import { TeamNotFoundError } from '@utils/errors/team-not-found.error'

export async function removePlayerFromTeam(
  playerName: string,
  groupName: string,
  teamName: string
) {
  const group = await getGroupByName(groupName)
  if (!group) {
    throw new GroupNotFoundError(groupName)
  }

  const team = group.teams.find(team => team.name === teamName)

  if (!team) {
    throw new TeamNotFoundError(teamName)
  }

  const playerIndex = team.players.findIndex(
    player => player.name === playerName
  )

  if (playerIndex === -1) {
    throw new InvalidPlayerError('Jogador não encontrado!')
  }

  team.players.splice(playerIndex, 1)

  await updateGroup(groupName, group)
}
