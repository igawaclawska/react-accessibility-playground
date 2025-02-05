import { useRef } from "react";

const useScrollTo = (offset = 0) => {
  const elementRef = useRef(null);

  const scrollToElement = () => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return { elementRef, scrollToElement };
};

export default useScrollTo;
