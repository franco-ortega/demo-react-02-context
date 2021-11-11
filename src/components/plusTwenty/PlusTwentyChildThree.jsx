import React from 'react'
import PropTypes from 'prop-types'

const PlusTwentyChildThree = ({ plusTwenty, incrementByTwenty }) => {
  return (
    <div>
      <h4>Plus Twenty Child Three</h4>
      <button onClick={incrementByTwenty}>Plus Twenty #3</button>
      {plusTwenty}
    </div>
  )
}

PlusTwentyChildThree.propTypes = {
  plusTwenty: PropTypes.number.isRequired, 
  incrementByTwenty: PropTypes.func.isRequired
}

export default PlusTwentyChildThree
