import React from "react";
import GameCard from "./GameCard";
import { useState } from "react";


const GameList = ({ games }) => {
 
  const [selectedGame, setSelectedGame] = useState(null);


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {games.map((videogame) => (
        <GameCard
          key={videogame.id}
          game={videogame}
          
        />
      ))}
     
    </div>
  );
};

export default GameList;