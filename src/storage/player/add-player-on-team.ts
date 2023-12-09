import { getGroupByName } from '@storage/group/get-group-by-name'
import { updateGroup } from '@storage/group/update-group'
import { GroupNotFoundError } from '@utils/errors/group-not-found.error'
import { InvalidPlayerError } from '@utils/errors/invalid-player.error'
import { PlayerIsAlreadyOnTeamError } from '@utils/errors/player-is-already-on-team.error'
import { TeamNotFoundError } from '@utils/errors/team-not-found.error'
import { Player } from 'src/models/player'

export async function addPlayerOnTeam(
  player: Player,
  groupName: string,
  teamName: string
) {
  if (!player.name)
    throw new InvalidPlayerError('Nome do jogador é obrigatório!')

  const group = await getGroupByName(groupName)
  if (!group) {
    throw new GroupNotFoundError(groupName)
  }

  const team = group.teams.find(team => team.name === teamName)

  if (!team) {
    throw new TeamNotFoundError(teamName)
  }

  const playerIsAlreadyOnTeam = team.players.find(
    existingPlayer => existingPlayer.name === player.name
  )

  if (!!playerIsAlreadyOnTeam) {
    throw new PlayerIsAlreadyOnTeamError(player.name, teamName)
  }

  team.players.push(player)

  await updateGroup(groupName, group)
  return player
}
