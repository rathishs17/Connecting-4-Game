import React from 'react'
import { GAME_STATE_PLAYING} from "../Constant";

const Footer=({onNewGameClick, onSuggestClick, gameState})=> {
const renderbtn=()=>{
  if(gameState === GAME_STATE_PLAYING){
    return         <button onClick={onSuggestClick} >Suggest</button>

  }
}

  return (
    <div className='panel footer'>
      {/* {
        gameState === GAME_STATE_PLAYING && 
        <button onClick={onSuggestClick} >Suggest</button>
      } */}
      {
        // gameState !== GAME_STATE_PLAYING &&
        <button onClick={onNewGameClick} >Restart</button>

      }

    </div>
  );
};

export default Footer;
