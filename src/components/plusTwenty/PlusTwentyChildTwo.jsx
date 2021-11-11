import React from 'react'
import PropTypes from 'prop-types'

const PlusTwentyChildTwo = ({ plusTwenty, incrementByTwenty }) => {
  return (
    <div>
      <h4>Plus Twenty Child Two</h4>
      <button onClick={incrementByTwenty}>Plus Twenty #2</button>
      {plusTwenty}
    </div>
  )
}

PlusTwentyChildTwo.propTypes = {
  plusTwenty: PropTypes.number.isRequired, 
  incrementByTwenty: PropTypes.func.isRequired
}

export default PlusTwentyChildTwo
