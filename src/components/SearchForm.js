import React, { useState, useEffect } from "react";
// import Result from "./Result";

export default function SearchForm({characters}) {
 
  const [searchTerm, setSearchTerm] = useState('');

  const [searchResults, setSearchResults ] = useState([]);

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  // const onSubmit = e => {
  //   e.preventDefault();

  // }

  useEffect(() => {
    let results = characters.filter(character =>
    (character.name).toLowerCase().includes(searchTerm.toLowerCase()))
    setSearchResults(results)
  }, [searchTerm]);

  return (
    <section className="search-form">
     <form>

       <label htmlFor="name">search</label>

       <input 
       id="name" 
       type="text" 
       name="searchbar"
       placeholder="Search" 
       onChange={handleChange}
       value={searchTerm}
       />

     </form>
     <ul>
      {searchResults.map( (character, index) => (
        <li
         key={index} >
         {character.name} 
         </li>
      ))}
    </ul>
    </section>
  );
}

// export default function Result() {

//   return(
//     <div>
    // <ul>
    //   {searchResults.map( (character, index) => (
    //     <Result
    //      key={index} 
    //      characterName={character} 
    //      />
    //   ))}
    // </ul>
//   </div>
//   )
// }
