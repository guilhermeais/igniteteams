import { TeamAlreadyExistsError } from '@utils/errors/team-already-exists.error'
import { Team } from '../../models/team'
import { getGroupByName } from '../group/get-group-by-name'
import { updateGroup } from '../group/update-group'

export async function addTeamToGroup(groupName: string, team: Team) {
  try {
    const group = await getGroupByName(groupName)

    if (!group) {
      throw new Error(`Grupo ${groupName} não encontrado.`)
    }

    const teamExists = group.teams.find(team => team.name === team.name)

    if (teamExists) {
      throw new TeamAlreadyExistsError(`Time ${team.name} já existe.`)
    }

    group.teams.push(team)

    await updateGroup(groupName, group)
  } catch (error) {
    throw error
  }
}
