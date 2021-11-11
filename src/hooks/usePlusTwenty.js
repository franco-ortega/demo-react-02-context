import { useState } from 'react';

export const usePlusTwenty = () => {
  const [plusTwenty, setPlusTwenty] = useState(20);

  const incrementByTwenty = () => {
    setPlusTwenty(prevState => prevState + 20);
  };

  return {
    plusTwenty,
    incrementByTwenty
  }
};
