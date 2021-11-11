import { createContext, useContext, useState } from "react";

const CounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(prevState => prevState + 1);
  };

  return (
    <CounterContext.Provider value={{
      counter,
      incrementCount
    }}>{children}</CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const {
    counter,
    incrementCount
  } = useContext(CounterContext);

  return {
    counter,
    incrementCount
  };
};
