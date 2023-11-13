import { useNavigate } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import "../styles/Navbar.scss";
import { useState } from "react";

export const NavBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const handleNavigate = (route: string) => {
    navigate(route);
    setSearch("");
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search !== "") {
      navigate(`/search/${search}`);
    }
  };
  return (
    <nav className='nav-bar'>
      <ul className='options'>
        <li onClick={() => navigate("/")}>
          <FaHouse />
        </li>
        <li onClick={() => handleNavigate("/movies")}>Movies</li>
        <li onClick={() => handleNavigate("/series")}>Series</li>
        <li onClick={() => handleNavigate("/shorts")}>Shorts</li>
      </ul>
      <input
        className='search'
        value={search}
        onChange={handleChangeSearch}
        onKeyDown={handleSubmitSearch}
      ></input>
    </nav>
  );
};
