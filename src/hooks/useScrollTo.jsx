import { useRef } from "react";

const useScrollTo = (offset = 0) => {
  const elementRef = useRef(null);

  const scrollToElement = () => {
    if (elementRef.current) {
      const elementPosition =
        elementRef.current.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });

      setTimeout(() => {
        elementRef.current.focus();
      }, 500);
    }
  };

  return { elementRef, scrollToElement };
};

export default useScrollTo;
