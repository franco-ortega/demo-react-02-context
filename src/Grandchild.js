import React from 'react';
import { useCounterContext } from './CounterContext';

const Grandchild = () => {
  const { counter } = useCounterContext();

  return (
    <section>
      <h3>Grandchild</h3>
      <p>Counter: {counter}</p>
    </section>
  )
}


export default Grandchild;
