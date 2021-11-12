import React from 'react'
import PlusTenChildOne from './PlusTenChildOne'
import PlusTenChildThree from './PlusTenChildThree'
import PlusTenChildTwo from './PlusTenChildTwo'

const PlusTenParent = () => {
  return (
    <div>
      <h2>Plus Ten Parent</h2>
      <p>(each child uses the same custom hook, but they use it directly and separately, so their state is independent from each other)</p>
      <PlusTenChildOne />
      <PlusTenChildTwo />
      <PlusTenChildThree />
    </div>
  )
}

export default PlusTenParent
