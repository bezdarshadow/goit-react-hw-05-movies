import { NavLink } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <ul className="header-menu">
      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderMenu;
