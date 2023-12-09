import AsyncStorage from '@react-native-async-storage/async-storage'
import { Group } from 'src/models/Group'
import { GROUP_COLLECTION } from '@storage/storage-config'

export async function listGroups(): Promise<Group[]> {
  try {
    const currentGroupsString = await AsyncStorage.getItem(GROUP_COLLECTION)

    const currentGroups: Group[] = currentGroupsString
      ? JSON.parse(currentGroupsString)
      : []

    return currentGroups
  } catch (error) {
    throw error
  }
}
