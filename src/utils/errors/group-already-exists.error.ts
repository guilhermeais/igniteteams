import { AppError } from '@utils/app.error'

export class GroupAlreadyExistsError extends AppError {
  constructor(groupName: string) {
    super(`Já existe um grupo com o nome ${groupName}`)
  }
}
