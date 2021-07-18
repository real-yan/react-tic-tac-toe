import React from 'react'

const TextInput = (props) => {
    return (
        <span>
            {props.label}: <input 
                type="text" 
                id={props.name}  
                placeholder={props.label} 
                onChange={props.handleInputChange} />
        </span>
    )
}

export default TextInput