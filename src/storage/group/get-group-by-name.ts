import { Group } from 'src/models/Group'
import { listGroups } from './list-groups'

export async function getGroupByName(groupName: string): Promise<Group> {
  try {
    const groups = await listGroups()

    const group = groups.find(group => group.name === groupName)

    if (!group) {
      throw new Error('Group not found')
    }

    return group
  } catch (error) {
    throw error
  }
}
