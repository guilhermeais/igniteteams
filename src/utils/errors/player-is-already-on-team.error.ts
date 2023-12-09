import { AppError } from '@utils/app.error'

export class PlayerIsAlreadyOnTeamError extends AppError {
  constructor(playerName: string, teamName: string) {
    super(`Jogador ${playerName} já está no time ${teamName}!`)
  }
}
