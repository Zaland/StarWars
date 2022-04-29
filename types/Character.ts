import { Homeworld, Species, Films } from "./index";

export interface Character {
  name?: string;
  height?: string;
  mass?: string;
  hairColor?: string;
  skinColor?: string;
  gender?: string;
  birthYear?: string;
  homeworld?: Homeworld;
  species?: Species[];
  films?: Films[];
}
