import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";

import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import WelcomePage from "./components/CharacterList";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <div>
    
    {/* <Route 
      exact
      path="/"
      render={()}
    /> */}
      <main>
      
        <Header />
        
        {/* <Route 
          path="/components" 
          render={(props) => (
            <CharacterList/>
          )}
        />   */}
        


        
      </main>
    </div>
  );
}
