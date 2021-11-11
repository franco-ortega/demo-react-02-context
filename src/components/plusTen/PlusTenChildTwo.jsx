import React from 'react'
import { usePlusTen } from '../../hooks/usePlusTen'

const PlusTenChildTwo = () => {
  const { plusTen, incrementByTen } = usePlusTen();

  return (
    <section>
      <h3>Second Plus Ten Child</h3>
      <button onClick={incrementByTen}>Plus Ten #2</button>
      {plusTen}
    </section>
  )
}

export default PlusTenChildTwo
