import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="ui centered">

      <div>

          <Link exact="true" to="/" >HomePage</Link>

          <Link exact="true" to="/characters" >Characters</Link>

          {/* <Link exact="true" to="/locations" >Locations</Link> */}
        
      </div>

      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
  );
}
