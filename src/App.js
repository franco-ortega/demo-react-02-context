import React, { useEffect, useState } from 'react';
import Child from './Child';
import { useCounterContext } from './CounterContext';

const App = () => {
  const [negCounter, setNegCounter] = useState(0);
  const { setCounter } = useCounterContext();

  const incrementCount = () => {
    setCounter(prevState => prevState + 1);
  };

  const decrementCount = () => {
    setNegCounter(prevState => prevState - 1);
  };

  useEffect(() => {
    console.log('Hello from useEffect');
    
  }, []);

  return (
    <main>
        <h1>Hello App</h1>
        <button onClick={incrementCount}>Plus One to Grandhild</button>
        <button onClick={decrementCount}>Negative One to App</button>
        {negCounter}
        <Child />
    </main>
  )
};

export default App;
