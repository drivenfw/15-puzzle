// Libs
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

// CSS
import './styles.sass'


const mapStateToProps = ({ layout: { lid } }) => ({
  lid
})

const Lid = ({ lid }) => (
  <Transition
    in={lid}
    timeout={2000}
    unmountOnExit
  >
    {state => (
      <React.Fragment>
        <div className={classNames('lid back', state)} />
        <div className={classNames('lid front', state)}>
          <label>15 Puzzle</label>
        </div>
      </React.Fragment>
    )}
  </Transition>
)

export default connect(mapStateToProps)(Lid)

