import { AppError } from '@utils/app.error'

export class GroupNotFoundError extends AppError {
  constructor(gorupName: string) {
    super(`Grupo ${gorupName} não encontrado!`)
  }
}
