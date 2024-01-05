import React from 'react'

import { GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WIN } from "../Constant";


const Header = ({gameState, currentPlayer, winPlayer})=> {
  const renderLabel=()=>{
    switch(gameState){
      case GAME_STATE_PLAYING:
        return <div>Player_{currentPlayer}_Turn</div>
      case GAME_STATE_WIN:
        return <div>Player_{winPlayer}_Wins</div>
      case GAME_STATE_DRAW:
        return <div>Game_is_a_draw!</div>

          default:
    }
  }
  return (
    <div className='panel header'>
      <div className='header-text'>
      {renderLabel()}
      </div>
    </div>
  );
};

export default Header
