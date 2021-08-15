import { ICharacter } from "./character.type";

export interface IPlayer{
   firstName: string;
   lastName: string;
   character?: ICharacter;
};
