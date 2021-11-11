import React from 'react'
import PlusTenChildOne from './PlusTenChildOne'
import PlusTenChildThree from './PlusTenChildThree'
import PlusTenChildTwo from './PlusTenChildTwo'

const PlusTenParent = () => {
  return (
    <div>
      <h2>Plus Ten Parent</h2>
      <p>(all children use the same custom hook but have independent state)</p>
      <PlusTenChildOne />
      <PlusTenChildTwo />
      <PlusTenChildThree />
    </div>
  )
}

export default PlusTenParent
