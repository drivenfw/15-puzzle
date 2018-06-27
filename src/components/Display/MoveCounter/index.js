// Libs
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

// Images
import MovesOff from 'images/moves-off.svg'
import MovesOn from 'images/moves-on.svg'

// CSS
import './styles.sass'

// Helpers
import { paddedNumber } from 'helpers/display'

const mapStateToProps = ({ 
  display: { moves },
  layout: { lid } 
}) => ({
  lid,
  moves
})

const MoveCounter = ({ lid, moves }) => (
  <div className={classNames('move-counter', { on: !lid })}>
    <img src={lid ? MovesOff : MovesOn} />
    <div>{paddedNumber(moves)}</div>
  </div>
)

export default connect(mapStateToProps)(MoveCounter)

