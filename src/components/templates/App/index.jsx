import React, { useContext } from 'react'

import LangContext from '../../../context/LangContext'

import Button from '../../atoms/Button'
import Game from '../../organisms/Game'

import './styles.css'

const App = () => {
    const { currentLangData, lang, switchLang } = useContext(LangContext); 

    const handleClick = () => {
        switchLang((lang === 'en-us' ? 'pt-br' : 'en-us'));                
    }
    
    return (
        <div className='app-wrapper'>
            <Game />
            <Button onClickHandler={handleClick}>{ currentLangData.changeLanguage }</Button>
        </div>
    )
}

export default App