import { forwardRef } from "react";
import styles from "./Heading.module.css";

const Heading = forwardRef(
  (
    { level = 1, className = "", hidden = false, children, ariaLive, tabIndex },
    ref
  ) => {
    const Tag = `h${Math.min(Math.max(level, 1), 6)}`;
    const headingClass = styles[`h${level}`] || "";

    return (
      <Tag
        ref={ref}
        tabIndex={tabIndex}
        aria-live={ariaLive}
        className={`${hidden ? "sr-only" : ""} ${headingClass} ${className}`}
      >
        {children}
      </Tag>
    );
  }
);

export default Heading;
