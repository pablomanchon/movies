import { Cards } from "./components/Cards";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import { MovieDetails } from "./components/MovieDetails";
import { ActorDetails } from "./components/ActorDetails";

function App() {
  return (
    <>
      <div className='container'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/actor/:id' element={<ActorDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
