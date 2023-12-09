import { Group } from 'src/models/Group'
import { listGroups } from './list-groups'
import { AppError } from '@utils/app.error'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storage-config'

export async function updateGroup(groupName: string, group: Group) {
  try {
    const groups = await listGroups()
    const groupIndex = groups.findIndex(group => group.name === groupName)

    if (groupIndex === -1) {
      throw new AppError(`Grupo ${groupName} não encontrado.`)
    }

    groups[groupIndex] = group
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
  } catch (error) {
    throw error
  }
}
