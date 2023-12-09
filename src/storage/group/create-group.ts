import AsyncStorage from '@react-native-async-storage/async-storage'
import { Group } from 'src/models/Group'
import { GROUP_COLLECTION } from '@storage/storage-config'
import { listGroups } from './list-groups'
import { AppError } from '@utils/app.error'
import { GroupAlreadyExistsError } from '@utils/errors/group-already-exists.error'

export async function createGroup(newGroup: Group): Promise<void> {
  try {
    if (!newGroup.name.trim().length) {
      throw new AppError('Informe o nome da turma')
    }

    const storedGroups: Group[] = await listGroups()

    const groupIsAlreadyStored = storedGroups.find(
      group => group.name === newGroup.name
    )

    if (groupIsAlreadyStored) {
      throw new GroupAlreadyExistsError(newGroup.name)
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storedGroups, newGroup])
    )
  } catch (error) {
    throw error
  }
}
