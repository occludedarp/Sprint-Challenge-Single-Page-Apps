import React, { useEffect, useState } from "react";
import axios from "axios";

import Result from "./Result";

import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
          console.log(response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getCharacters();
  }, []);

  return (
    <section className="character-list">
      <SearchForm characters={characters}/>

      <h2>{characters.map(character => (
        <CharacterCard key={character.id} image={character.image} name={character.name} origin={character.origin.name} species={character.species} status={character.status}  />
        ))}</h2>
    </section>
  );
}
