import React, { useContext } from 'react'

import LangContext from '../../../context/LangContext'

const TextInput = (props) => {
    const { currentLangData } = useContext(LangContext);
    return (
        <span>
            {props.label}: <input 
                type="text" 
                id={props.name}  
                placeholder={currentLangData.playerSelection.playerPlaceHolder.replace('#HOLDER#', props.label)} 
                onChange={props.handleInputChange} />
        </span>
    )
}

export default TextInput