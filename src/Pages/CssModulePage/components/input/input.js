import React, { useState } from 'react'
import css from './input.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

function input ({className, isWide, label}) {
  const [isHovered, setIsHovered] = useState(false);

  const inputClass = classNames(
    css.input,
    className,
    {
      [css.wide]: isHovered
    }
  )

  return(
    <div>
      <label>{label}</label>
      <input className={inputClass}
             onMouseEnter={() => { setIsHovered(true) }}>
      </input>
    </div>
  )

}

input.protoTypes = {
  className: PropTypes.string,
  isWide: PropTypes.bool,
  label: PropTypes.string
}

export default input