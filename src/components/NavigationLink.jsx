import { NavLink } from "react-router-dom";
import styles from "./NavigationLink.module.css";

const NavigationLink = ({ children, to, ariaLabel }) => {
  return (
    <li>
      <NavLink
        to={to}
        aria-label={ariaLabel}
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
