export type Character = {
  id: string;
  name: string;
  image: string;
  status: string;
  favorite: boolean;
  location: Location;
  episode: Episode[];
}

type Location = {
  id: string;
  name: string;
}

type Episode = {
  id: string;
}

