import React from 'react'
import './styles.css'

const Button = (props) => {   
    const highlighted = props.highlighted && 'highlighted'; 
    return (
        <button className={highlighted} onClick={props.onClickHandler}>
            {props.children}
        </button>
    )
}

export default Button