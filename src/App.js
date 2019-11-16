import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";

// import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";
// import SearchForm from "./components/SearchForm";



export default function App() {
  
  // const [searchTerm, setSearchTerm] = useState('');

  // const [searchResults, setSearchResults ] = useState('');

  // const handleChange = e => {
  //   setSearchTerm(e.target.value)
  // }

  return (
    <main>
      <Header />

      <Route exact path="/" component={WelcomePage}/>
    
      <Route path="/characters" component={CharacterList}/>

      <Route path="/locations" component={LocationsList}/>

    </main>
  );
}
