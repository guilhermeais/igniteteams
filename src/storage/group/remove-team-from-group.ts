import { Team } from 'src/models/team'
import { getGroupByName } from './get-group-by-name'
import { updateGroup } from './update-group'
import { AppError } from '@utils/app.error'

export async function removeTeamFromGroup(groupName: string, team: Team) {
  try {
    const group = await getGroupByName(groupName)

    if (!group) {
      throw new AppError(`Grupo ${groupName} não encontrado.`)
    }

    const teamIndex = group.teams.findIndex(t => t.name === team.name)

    if (teamIndex === -1) {
      throw new AppError(`Time ${team.name} não encontrado.`)
    }

    group.teams.splice(teamIndex, 1)

    await updateGroup(groupName, group)
  } catch (error) {
    throw error
  }
}
