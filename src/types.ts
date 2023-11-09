export interface Movie {
  _id: string;
  id: string;
  ratingsSummary: RatingsSummary;
  episodes: null;
  primaryImage: PrimaryImage | null;
  titleType: TitleType;
  genres: Genres;
  titleText: TitleText;
  originalTitleText: TitleText;
  releaseYear: YearRange;
  series: null;
  meterRanking: null;
  plot: Plot | null;
  actors: CreditEdge[];
}
interface Cast {
  name: {
    id: string;
    nameText: {
      text: string;
      __typename: string;
    };
    primaryImage: {
      url: string;
      width: number;
      height: number;
      __typename: string;
    } | null;
    __typename: string;
  };
  attributes:
    | {
        text: string;
        __typename: string;
      }[]
    | null;
  characters: {
    name: string;
    __typename: string;
  }[];
  episodeCredits: {
    total: number;
    yearRange: null | number[];
    __typename: string;
  };
  __typename: string;
}
interface CreditEdge {
  node: Cast;
}
interface RatingsSummary {
  aggregateRating: number;
  voteCount: number;
  __typename: string;
}
interface Plot {
  plotText: PlotText;
  language: DisplayableLanguage;
  __typename: string;
}
interface Genres {
  genres: Genre[];
  __typename: string;
}
interface Genre {
  text: string;
  id: string;
  __typename: string;
}
interface PlotText {
  plainText: string;
  __typename: string;
}
interface DisplayableLanguage {
  id: string;
  __typename: string;
}
interface YearRange {
  year: number;
  endYear: number | null;
  __typename: string;
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
