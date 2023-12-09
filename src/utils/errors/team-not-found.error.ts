import { AppError } from '@utils/app.error'

export class TeamNotFoundError extends AppError {
  constructor(teamName: string) {
    super(`Time ${teamName} não encontrado!`)
  }
}
