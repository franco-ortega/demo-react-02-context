import React, { useEffect } from 'react'
import { usePlusTwenty } from '../../hooks/usePlusTwenty'
import PlusTwentyChildOne from './PlusTwentyChildOne'
import PlusTwentyChildTwo from './PlusTwentyChildTwo'
import PlusTwentyChildThree from './PlusTwentyChildThree'

const PlusTwentyParent = () => {
  const { plusTwenty, incrementByTwenty } = usePlusTwenty();

  useEffect(() => {
    console.log('%c Hi hi hi from PlusTwentyParent on page load and when my any of my children update the state that I passed them via props! I am using a custom hook, and they are all getting the same state from me!!!', 'color: orangered');
  }, [plusTwenty]);

  return (
    <div>
      <h2>Plus Twenty Parent</h2>
      <p>(parent uses a custom hook for state and passes this state to its children via props, so they all share the same state)</p>
      <PlusTwentyChildOne plusTwenty={plusTwenty} incrementByTwenty={incrementByTwenty} />
      <PlusTwentyChildTwo plusTwenty={plusTwenty} incrementByTwenty={incrementByTwenty} />
      <PlusTwentyChildThree plusTwenty={plusTwenty} incrementByTwenty={incrementByTwenty} />
    </div>
  )
}

export default PlusTwentyParent
