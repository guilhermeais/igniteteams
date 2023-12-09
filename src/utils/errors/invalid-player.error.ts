import { AppError } from '@utils/app.error'

export class InvalidPlayerError extends AppError {
  constructor(message: string) {
    super(message)
  }
}
