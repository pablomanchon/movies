import axios from "axios";

export const api = axios.create({
  baseURL: "https://movie-database-alternative.p.rapidapi.com",
  params: {
    startYear: "2020",
    sort: "year.incr",
    info: "base_info",
    limit: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
});
export const searchApi = axios.create({
  baseURL: "https://moviesdatabase.p.rapidapi.com/titles/search/title",
  params: {
    startYear: "2020",
    sort: "year.incr",
    info: "base_info",
    limit: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
});
