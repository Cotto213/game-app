import React from "react";
import { useEffect, useState } from "react";
import Search from "./components/Search";


import GameCard from "./components/GameCard";
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

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchGames(search);
  };

  return (
    <div className="app">
      <h1 className=" mt-4 text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        GAMELAND
      </h1>
      <div className="search">
        <Search
          onChange={(e) => handleSearch(e)}
        />
      </div>
      {games?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {games.map((videogame) => (
            <GameCard game={videogame} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No games found</h1>
        </div>
      )}
      ;
    </div>
  );
};

export default App;
