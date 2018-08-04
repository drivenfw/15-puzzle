// Libs
import React from 'react'
import classNames from 'classnames'

// CSS
import './styles.sass'


const Checkbox = ({ 
  bright, 
  checked, 
  label, 
  onChange 
}) => (
  <label className={classNames('checkbox', { bright })}>
    {label}
    <input 
      type="checkbox" 
      checked={checked} 
      onChange={e => onChange(e.target.checked)}
    />
    <span className="checkmark" />
  </label>
)

export default Checkbox

