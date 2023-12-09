import { AppError } from '@utils/app.error'

export class TeamAlreadyExistsError extends AppError {
  constructor(teamName: string) {
    super(`Time ${teamName} já existe!`)
  }
}
