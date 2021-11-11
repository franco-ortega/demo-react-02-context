import React, { useEffect, useState } from 'react';
import Child from '../child/Child';
import { useCounterContext } from '../../state/CounterContext';

const App = () => {
  const [negCounter, setNegCounter] = useState(0);
  const { counter, incrementCount } = useCounterContext();

  const decrementCount = () => {
    setNegCounter(prevState => prevState - 1);
  };

  useEffect(() => {
    console.log('%cHello from useEffect on page load.', 'color: green');
    // The empty dependency array means this will only run when the page loads.
  }, []);
  
  useEffect(() => {
    console.log('%cHola from useEffect when page loads and when any state changes.', 'color: blue');
    // No dependency array means this will run when the page loads and run again every time that any state changes.
  });

  useEffect(() => {
    if(counter) console.log('%cHowdy from useEffect when the counter changes.', 'color: purple');
    // This will only run when the counter state changes.
  }, [counter]);

  return (
    <main>
        <h1>Hello App</h1>
        <button onClick={incrementCount}>Plus One from App to Grandchild</button>
        <button onClick={decrementCount}>Negative One to App</button>
        {negCounter}
        <Child />
    </main>
  )
};

export default App;
