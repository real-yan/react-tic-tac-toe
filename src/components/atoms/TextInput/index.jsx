import React from 'react'
import './styles.css'

const TextInput = (props) => {
    return (
        <span className="textinput-wrapper">
            <span>{props.label}:</span>
            <input 
                type="text" 
                id={props.name} 
                placeholder={props.placeholder} 
                onChange={props.inputChangeHandler} />
        </span>
    )
}

export default TextInput