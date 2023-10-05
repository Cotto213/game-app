import React from 'react';
import {Card} from 'flowbite-react';
import 'flowbite-react';


const GameCard = ({ game }) => {
    return (
      <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={game.background_image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          {game.name}
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
         {game.platforms.map((platform) => (    
            <span key={platform.platform.id}>{platform.platform.name} </span>
          ))    
        }
        </p>
      </p>
    </Card>
    )
};

export default GameCard;