import React from "react";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import GameList from "./components/GameList"; 
// e94e779ca9bb414796d1e0bdd44de225

const Api_url =
  "https://rawg.io/api/games?key=e94e779ca9bb414796d1e0bdd44de225";

const App = () => {
  const searchGames = async (title) => {
    const response = await fetch(Api_url + "&search=" + title);
    const data = await response.json();
    setGames(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    searchGames("");
  }, []);

  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

const [modal, setModal] = useState(false);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    searchGames(searchValue);
  };

  const handleModal = () => {
return(

  <div className="modal">
<modal >
{}

</modal>


  </div>

)
  
  }



  return (
    <div className=" bg-gray-800">
      <h1 className=" pt-4 text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
        GAMELAND
      </h1>
      <div className="search">
             <Search onChange={(e) => handleSearch(e)} />
          
      </div>
      <GameList games={games} 
        onClick={() => handleModal(games)}
      />
      
    </div>
  );
};

export default App;
