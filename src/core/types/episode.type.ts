import { Character } from "./character.type";

export type Episode = {
  id: string;
  name: string;
  air_date: string;
  characters: Character[];
};

export type EpisodeResponse = {
  episodes: { results: Episode[] };
};
