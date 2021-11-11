import React from 'react'
import { usePlusTen } from '../../hooks/usePlusTen'

const PlusTenChildThree = () => {
  const { plusTen, incrementByTen } = usePlusTen();

  return (
    <section>
      <h3>Third Plus Ten Child</h3>
      <button onClick={incrementByTen}>Plus Ten #3</button>
      {plusTen}
    </section>
  )
}

export default PlusTenChildThree
