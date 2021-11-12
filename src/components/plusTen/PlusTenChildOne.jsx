import React, { useEffect } from 'react'
import { usePlusTen } from '../../hooks/usePlusTen'

const PlusTenChildOne = () => {
  const { plusTen, incrementByTen } = usePlusTen();

  useEffect(() => {
    console.log('%cHey hey from First Plus Ten Child on page load and when my state changes. But not when my siblings change their state. We are all using the same custom hook, but we are using it independent of each other, so we each have our own separate state!', 'color: gray');
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
