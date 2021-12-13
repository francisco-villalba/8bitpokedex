import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async (query = "asdsad") => {
    setLoading(true);

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
      const pokemon = await res.json();
      
      setData({
        name: pokemon.name,
        type: pokemon.types[0].type.name,
        imgUrl: pokemon.sprites.front_default,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat
      })
    } catch (e) {
        setData({error: true})
    }

    setTimeout(() => {
      setLoading(false)
    }, 1500);
  };

  return (
    <AppContext.Provider value={{data, setData, fetchPokemon, loading}}>
      {children}
    </AppContext.Provider>
  );
};
