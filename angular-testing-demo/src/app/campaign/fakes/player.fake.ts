import { IPlayer } from "../interfaces/player.type"

export const makeFakePlayer = (overrides?: Partial<IPlayer>) => {
  return {
    firstName: 'FAKE PLAYER FIRST NAME',
    lastName: 'FAKE PLAYER LAST NAME',
    character: null,
    ...overrides
  }
}
