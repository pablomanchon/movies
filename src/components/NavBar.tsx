import { useNavigate } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import "../styles/Navbar.scss";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className='nav-bar'>
      <ul className='options'>
        <li onClick={() => navigate("/")}>
          <FaHouse />
        </li>
        <li onClick={() => navigate("/")}>Movies</li>
        <li>Series</li>
        <li>Shorts</li>
      </ul>
      <input className='search'></input>
    </nav>
  );
};
