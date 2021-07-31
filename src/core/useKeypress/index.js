import { useEffect } from "react";

export const useKeypress = (fn) => {
  useEffect(() => {
    window.addEventListener("keydown", fn);
    return () => {
      window.removeEventListener("keydown", fn);
    };
  }, [fn]);
};
