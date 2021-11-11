import React from 'react';
import { useCounterContext } from '../../state/CounterContext';
import Grandchild from '../grandchild/Grandchild';

const Child = () => {
  const { incrementCount } = useCounterContext();
  
  return (
    <section>
      <h2>Child</h2>
      <button onClick={incrementCount}>Plus One to Grandchild</button>
      <Grandchild />
    </section>
  )

}
export default Child;
