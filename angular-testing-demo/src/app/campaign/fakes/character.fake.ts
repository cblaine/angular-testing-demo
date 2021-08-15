import { ICharacter } from "../interfaces/character.type";

export const makeFakeCharacter = (overrides?: Partial<ICharacter>) => {
  return {
    firstName: 'FAKE CHARACTER FIRST NAME',
    lastName: 'FAKE CHARACTER LAST NAME',
    ...overrides
  }
}
