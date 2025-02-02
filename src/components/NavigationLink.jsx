import styles from "./NavigationLink.module.css";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ children, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${styles.navLink} ${styles.navLinkActive}`
            : styles.navLink
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
