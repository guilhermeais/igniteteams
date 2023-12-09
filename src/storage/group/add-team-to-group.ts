import { Team } from 'src/models/team'
import { getGroupByName } from './get-group-by-name'
import { updateGroup } from './update-group'

export async function addTeamToGroup(groupName: string, team: Team) {
  try {
    const group = await getGroupByName(groupName)

    if (!group) {
      throw new Error(`Grupo ${groupName} não encontrado.`)
    }

    group.teams.push(team)

    await updateGroup(groupName, group)
  } catch (error) {
    throw error
  }
}
