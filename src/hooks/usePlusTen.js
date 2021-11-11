import { useState } from "react"

export const usePlusTen = () => {
  const [plusTen, setPlusTen] = useState(10);

  const incrementByTen = () => {
    setPlusTen(prevState => prevState + 10);
  };

  return {
    plusTen,
    incrementByTen
  }
};
