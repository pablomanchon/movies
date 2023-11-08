import { Cards } from "./components/Cards";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <>
      <div className='container'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Cards />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
