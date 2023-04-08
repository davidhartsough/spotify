export interface Artist {
  id: string;
  name: string;
  genres: string;
}

export interface Album {
  id: string;
  name: string;
  artist: string;
}

export interface Mix {
  id: string;
  name: string;
}
