import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filterChars, setFilterChars] = useState([]);

  const search = (val) => {
    if (!val) {
      setFilterChars(characters);
    } else {
      const filterdArr = characters.filter(char => {
        return char["name"].toLowerCase().search(val.toLowerCase()) > -1
      })
  
      setFilterChars(filterdArr)
    }
  }


  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
          setFilterChars(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getCharacters();
  }, []);

  return (
    <section className="character-list">
      <SearchForm search = {search} /> 
      {filterChars.map(character => (
        <CharacterCard 
          key = {character.id}
          image = {character.image}
          name = {character.name}
          origin = {character.origin.name}
          species = {character.species}
          status = {character.status} />
        ))}
    </section>
  );
}