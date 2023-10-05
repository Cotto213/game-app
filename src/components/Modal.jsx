import React,{useState} from "react";



export const modalComponent=({visible, onClick, game})=>{
return(
    <div className="modal" visible={visible} transparent={true}>
    <div className="modal-content">
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        {game.name}
        With less than a month to go before the European Union enacts
        new consumer privacy laws for its citizens, companies around
        the world are updating their terms of service agreements to
        comply.
      </p>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        The European Unions General Data Protection Regulation
        (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
        common set of data rights in the European Union. It requires
        organizations to notify users as soon as possible of high-risk
        data breaches that could personally affect them.
      </p>
      <button onClick={onClick}>Close</button>
    </div>
  </div>
)


}