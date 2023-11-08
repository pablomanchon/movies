import axios from "axios";

export const api = axios.create({
  baseURL: "https://movie-database-alternative.p.rapidapi.com",
  params: {
    startYear: "2020",
    list: "most_pop_movies",
    sort: "year.incr",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
});

export const getMovies = async () => {
  const res = await api.get("/titles");
  console.log(res);
  return res.data;
};
