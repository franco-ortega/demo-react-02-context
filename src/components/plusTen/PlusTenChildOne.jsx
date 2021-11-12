import React, { useEffect } from 'react'
import { usePlusTen } from '../../hooks/usePlusTen'

const PlusTenChildOne = () => {
  const { plusTen, incrementByTen } = usePlusTen();

  useEffect(() => {
    console.log('%cHey hey from PlusTenChildOne', 'color: gray');
  }, [plusTen]);

  return (
    <section>
      <h3>First Plus Ten Child</h3>
      <button onClick={incrementByTen}>Plus Ten #1</button>
      {plusTen}
    </section>
  )
}

export default PlusTenChildOne
