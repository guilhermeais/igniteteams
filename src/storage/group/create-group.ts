import AsyncStorage from '@react-native-async-storage/async-storage'
import { Group } from '@screens/Players'
import { GROUP_COLLECTION } from '@storage/storage-config'
import { listGroups } from './list-groups'

export async function upsertGroup(newGroup: Group): Promise<void> {
  try {
    const storedGroups: Group[] = await listGroups()

    const groupIsAlreadyStored = storedGroups.find(
      group => group.name === newGroup.name
    )

    if (groupIsAlreadyStored) {
      const updatedGroups = storedGroups.map(group => {
        if (group.name === newGroup.name) {
          return newGroup
        }

        return group
      })

      await AsyncStorage.setItem(
        GROUP_COLLECTION,
        JSON.stringify(updatedGroups)
      )

      return
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storedGroups, newGroup])
    )
  } catch (error) {
    throw error
  }
}
