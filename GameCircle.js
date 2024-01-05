import React from 'react';
import '../Game.css';



const GameCircle = ({children, id, className, oncircleclicked}) => {

  return (
    <div className={`gameCircle ${className}`} onClick={ ()=> oncircleclicked(id)}>
      {children}
    </div>
  )
}

export default GameCircle;
