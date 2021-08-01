import React from 'react'
import './styles.css'

const Button = (props) => {   
    const highlighted = props.highlighted ? 'highlighted' : undefined; 
    return (
        <button className={highlighted} onClick={props.onClickHandler}>
            {props.children}
        </button>
    )
}

export default Button