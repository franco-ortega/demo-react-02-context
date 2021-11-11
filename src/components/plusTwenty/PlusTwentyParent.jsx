import React from 'react'
import { usePlusTwenty } from '../../hooks/usePlusTwenty'
import PlusTwentyChildOne from './PlusTwentyChildOne'
import PlusTwentyChildTwo from './PlusTwentyChildTwo'
import PlusTwentyChildThree from './PlusTwentyChildThree'

const PlusTwentyParent = () => {
  const { plusTwenty, incrementByTwenty } = usePlusTwenty();

  return (
    <div>
      <h2>Plus Twenty Parent</h2>
      <p>(all children use the same custom hook state passed via props from the same parent)</p>
      <PlusTwentyChildOne plusTwenty={plusTwenty} incrementByTwenty={incrementByTwenty} />
      <PlusTwentyChildTwo plusTwenty={plusTwenty} incrementByTwenty={incrementByTwenty} />
      <PlusTwentyChildThree plusTwenty={plusTwenty} incrementByTwenty={incrementByTwenty} />
    </div>
  )
}

export default PlusTwentyParent
