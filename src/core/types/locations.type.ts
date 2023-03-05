import { Character } from "./character.type";

export type Location = {
  id: string;
  name: string;
  residents: Character[];
};

export type LocationResponse = {
  locations: { results: Location[] };
};
