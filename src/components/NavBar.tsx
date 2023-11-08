import "../styles/Navbar.scss";

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <ul className='options'>
        <li>Movies</li>
        <li>Series</li>
        <li>Shorts</li>
      </ul>
      <input className='search'></input>
    </nav>
  );
};
