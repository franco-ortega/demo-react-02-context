import React, { useEffect, useState } from 'react';
import Child from '../child/Child';
import { useCounterContext } from '../../state/CounterContext';
import PlusTenParent from '../plusTen/PlusTenParent';
import PlusTwentyParent from '../plusTwenty/PlusTwentyParent';

const App = () => {
  const [negativeCounter, setNegativeCounter] = useState(0);
  const { counter, incrementCount } = useCounterContext();

  const decrementCount = () => {
    setNegativeCounter(prevState => prevState - 1);
  };

  useEffect(() => {
    console.log('%cHello from useEffect on page load.', 'color: green');
    // The empty dependency array means this will only run when the page loads.
  }, []);
  
  useEffect(() => {
    console.log('%c Hola from useEffect when page loads and when any Context state changes.', 'color: blue');
    // No dependency array means this will run when the page loads and run again every time that any Context state changes.
  });

  useEffect(() => {
    if(counter) console.log('%cHowdy from useEffect when the counter changes.', 'color: purple');
    // This will only run when the counter state changes.
  }, [counter]);

  return (
    <main>
        <h1>Hello App</h1>
        <p>(uses context to share same state across multiple components)</p>
        <button onClick={incrementCount}>Plus One from App to Grandchild</button>
        <button onClick={decrementCount}>Negative One to App</button>
        {negativeCounter}
        <Child />
        <span>
          <PlusTenParent />
          <hr />
          <PlusTwentyParent />
        </span>
    </main>
  )
};

export default App;
