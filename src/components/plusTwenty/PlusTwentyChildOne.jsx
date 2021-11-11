import React from 'react'
import PropTypes from 'prop-types'

const PlusTwentyChildOne = ({ plusTwenty, incrementByTwenty }) => {
  return (
    <div>
      <h4>Plus Twenty Child One</h4>
      <button onClick={incrementByTwenty}>Plus Twenty #1</button>
      {plusTwenty}
    </div>
  )
}

PlusTwentyChildOne.propTypes = {
  plusTwenty: PropTypes.number.isRequired, 
  incrementByTwenty: PropTypes.func.isRequired
}

export default PlusTwentyChildOne
