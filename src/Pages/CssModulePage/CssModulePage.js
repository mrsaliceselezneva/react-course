import React from 'react'
import css from './CssModulePage.module.css'
import input from './components/input/input'

function CssModulePage () {
    return(
        <div>
            <input className={css.input} isWide label='hello'/>
        </div>
    )
}
export default CssModulePage