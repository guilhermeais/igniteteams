import AsyncStorage from '@react-native-async-storage/async-storage'
import { Group } from '@screens/Players'
import { GROUP_COLLECTION } from '@storage/storage-config'
import { listGroups } from './list-groups'

export async function createGroup(newGroupName: string): Promise<void> {
  try {
    const currentGroups: Group[] = await listGroups()

    const newGroup: Group = {
      name: newGroupName,
      players: [],
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...currentGroups, newGroup])
    )
  } catch (error) {
    throw error
  }
}
