export interface Movie {
  _id: string;
  id: string;
  primaryImage?: PrimaryImage;
  titleText: TitleText;
  originalTitleText: OriginalTitleText;
  releaseYear: ReleaseYear;
  titleType: TitleType;
}

export interface FetchMovie {
  movies: Movie[];
  nextPage: number;
}

export interface PrimaryImage {
  id: string;
  url: string;
  caption: Caption;
  __typename: string;
}

export interface Caption {
  plainText: string;
  __typename: string;
}

export interface TitleType {
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  __typename: string;
}

export interface TitleText {
  text: string;
  __typename: string;
}

export interface OriginalTitleText {
  text: string;
  __typename: string;
}

export interface ReleaseYear {
  year: number;
  endYear: unknown;
  __typename: string;
}
