import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

import "./styles/App.scss";
import { MovieDetails } from "./components/MovieDetails";
import { ActorDetails } from "./components/ActorDetails";
import { All } from "./components/All";
import { Series } from "./components/Series";
import { Movies } from "./components/Movies";
import { Shorts } from "./components/Shorts";
import { SearchResults } from "./components/SearchResults";

function App() {
  return (
    <>
      <div className='container'>
        <NavBar />
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/series' element={<Series />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/shorts' element={<Shorts />} />
          <Route path='/search/:searchParam' element={<SearchResults />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/actor/:id' element={<ActorDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
