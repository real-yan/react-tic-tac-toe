import React, { useState } from 'react';

const LangContext = React.createContext({
  lang: '',
  switchLang: () => {},
  currentLangData: {}
});

export default LangContext;

export const LangProvider = (props) => {
    const [lang, setLang] = useState('en-us');

    const switchLang = (lang) => {
      setLang(lang);
    }
    
    return (
      <LangContext.Provider value={{lang, switchLang, currentLangData: langData[lang]}}>
        {props.children}
      </LangContext.Provider>
    )
}

const langData = {
  'en-us': {
    changeLanguage: 'Change Language',
    playerSelection: {
      player1: 'Player 1',
      player2: 'Player 2',
      playerPlaceHolder: 'Type the #HOLDER# name'
    },
    gameStatus: {
      nextPlayer: 'Next Player:',
      winner: 'Winner:',
      tie: "It's a tie!"
    },
    history: {
      start: 'Go to start',
      move: 'Go to move #',
      toggle: 'Toggle'
    }
  },
  'pt-br': {
    changeLanguage: 'Mudar Idioma',
    playerSelection: {
      player1: 'Jogador 1',
      player2: 'Jogador 2',
      playerPlaceHolder: 'Digite o nome do #HOLDER#'
    },
    gameStatus: {
      nextPlayer: 'Próximo Jogador:',
      winner: 'Vencedor:',
      tie: "Empatou!"
    },
    history: {
      start: 'Volte para o início',
      move: 'Volta para a jogada #',
      toggle: 'Alternar'
    }  
  }
}