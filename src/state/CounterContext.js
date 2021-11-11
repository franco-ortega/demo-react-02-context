import { createContext, useContext, useState } from "react";

const CounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{
      counter,
      setCounter
    }}>{children}</CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const {
    counter,
    setCounter
  } = useContext(CounterContext);

  return {
    counter,
    setCounter
  };
};
