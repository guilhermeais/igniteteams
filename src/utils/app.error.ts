export class AppError extends Error {
  message: string

  constructor(message: string) {
    super(message)
    this.message = message
  }

  static isAppError(error: Error | any): error is AppError {
    return error instanceof AppError
  }
}
