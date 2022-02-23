import { NavLink } from "react-router-dom";
import styles from './header-menu.module.css'


const getLinkClassName = ({isActive}) => isActive ? styles.active : styles.link;

const HeaderMenu = () => {
  return (
    <header className={styles.header}>
    <ul className={styles.headermenu}>
      <li>
        <NavLink className={getLinkClassName} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={getLinkClassName} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
    </header>
  );
};

export default HeaderMenu;
